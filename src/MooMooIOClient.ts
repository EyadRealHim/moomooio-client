import Player, { PlayerType } from "./instance/Player";
import MooMooIOConnection from "./MooMooIOConnection";
import { ServerPacket } from "./ServerPackets";
import MyPlayer from "./instance/MyPlayer";
import Team from "./instance/Team";
import GameObject from "./instance/GameObject";

export default class MooMooIOClient {
  // Require Destroy
  public readonly connection = new MooMooIOConnection();

  // Require Clear
  public readonly myPlayer = new MyPlayer(this.connection);
  protected players = new Map<number, PlayerType>();

  protected teams = new Map<string, Team>();
  protected gameObjects: GameObject[] = [];

  constructor() {
    this.init();
  }

  protected init() {
    this.connection.on("message", this.onMessage.bind(this));
    this.connection.on("close", this.clear.bind(this));
    this.connection.on("open", this.clear.bind(this));
  }

  public destroy() {
    this.connection.destroy();
    this.myPlayer.clear();
    this.clear();
  }

  protected clear() {
    this.players.forEach((player) => player.clear());
    this.teams.clear();
  }

  protected onMessage(packet: ServerPacket) {
    switch (packet.PACKET_NAME) {
      // GameObject:
      case "SetObjectsData": {
        for (let gameObjectData of packet.objects) {
          const gameObject = new GameObject();

          gameObject.init(gameObjectData);
          this.players.forEach(gameObject.__auth.bind(gameObject));

          this.gameObjects.push(gameObject);
        }
        break;
      }

      case "RemoveObject": {
        this.gameObjects = this.gameObjects.filter(
          (gameObject) => gameObject.id != packet.objectID
        );
        break;
      }

      case "RemoveObjects": {
        this.gameObjects = this.gameObjects.filter(
          (gameObject) => gameObject.ownerID != packet.ownerID
        );
        break;
      }

      case "ObjectStrike": {
        const gameObject = this.gameObjects.find((gameObject) => gameObject.id == packet.objectID);

        gameObject?.emit("strike", {
          forceDirection: packet.forceDirection,
        });
        break;
      }

      // Team Stuff:
      case "TeamNotification": {
        this.myPlayer.emit("teamNotification", structuredClone(packet));
        break;
      }
      case "TeamSignal": {
        this.myPlayer.emit("teamSignal", structuredClone(packet));
        break;
      }
      case "UpdateTeamMembersList": {
        const myPlayerTeam = this.myPlayer.getTeam(this.teams);

        if (myPlayerTeam) {
          myPlayerTeam.membersList = structuredClone(packet.members);
        }
        break;
      }
      case "InitializeTeams": {
        for (let team of packet.teams) {
          this.teams.set(team.title, new Team(team.title, team.ownerID));
        }
        break;
      }
      case "CreateTeam": {
        this.teams.set(packet.title, new Team(packet.title, packet.ownerID));
        break;
      }

      case "DeleteTeam": {
        this.teams.delete(packet.title);
        break;
      }

      // myPlayer Stuff:
      case "UpdateResource": {
        this.myPlayer.__updateResource(packet);
        break;
      }
      case "UpdateItemUsage": {
        this.myPlayer.__updateItemUsage(packet);
        break;
      }
      case "UpdateItemStore": {
        this.myPlayer.__updateItemStore(packet);
        break;
      }
      case "UpdateUpgrades": {
        this.myPlayer.__updateUpgrades(packet);
        break;
      }
      case "UpdateProgress": {
        this.myPlayer.__updateProgress(packet);
        break;
      }
      case "UpdateItems": {
        this.myPlayer.__updateItems(packet);
        break;
      }
      case "Pong": {
        this.myPlayer.emit("pong", structuredClone(packet));
        break;
      }
      case "IOInit": {
        this.myPlayer.__init();
        this.myPlayer.emit("init", structuredClone(packet));
        break;
      }
      case "InitializeGame": {
        break;
      }

      case "Death": {
        this.myPlayer.__death();
        break;
      }

      case "Disconnect": {
        this.connection.disconnect();
        break;
      }

      // Player Stuff:
      case "InitializePlayer": {
        if (packet.isMyPlayer) {
          this.myPlayer.isInitialized && this.players.delete(this.myPlayer.playerID);
          // @ts-ignore
          this.players.set(packet.playerID, this.myPlayer);
        }

        let player = this.players.get(packet.playerID);

        if (!player) {
          player = new Player();

          this.players.set(packet.playerID, player);
        }

        player.initialize(packet);
        this.gameObjects.forEach((gameObject) => gameObject.__auth(player!));

        if (packet.isMyPlayer) {
          this.myPlayer.__spawn();
        }

        break;
      }

      case "UpdateHealth": {
        let player = this.players.get(packet.playerID);

        player?.setHealth(packet.playerHealth);
        break;
      }

      case "UpdatePlayers": {
        for (let playerData of packet.players) {
          this.players.get(playerData.playerID)?.update(playerData);
        }
        break;
      }

      case "PlayerDisconnect": {
        this.players.forEach((player) => {
          if (player.initID == packet.initID) {
            player.clear();
            this.players.delete(player.playerID);
          }
        });
        break;
      }

      case "Punch": {
        const player = this.players.get(packet.ownerID);

        player?.emit("punch", {
          direction: player.angle,
          didHit: packet.didHit,
          player,
        });

        break;
      }

      case "ReceiveChat": {
        const player = this.players.get(packet.ownerID);

        player?.emit("chat", {
          message: packet.message,
          player,
        });
        break;
      }

      default:
        break;
    }
  }
}
