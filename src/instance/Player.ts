import InitializePlayer from "../ServerPackets/InitializePlayer";
import { PlayerData } from "../ServerPackets/UpdatePlayers";
import PropertyTracker from "../utils/PropertyTracker";
import UnifyEmitter, { EventsObject } from "unify-emitter";
import Team from "./Team";
import GameObject from "./GameObject";

export interface PlayerEvents {
  move: {
    /**
     * The direction where the player is moving (in radians) or `null` which mean player stops move
     */
    direction: number | null;
    /**
     * The player instance
     */
    player: ThisType<Player<PlayerEvents>>;

    /**
     * player position on y-axis
     */
    y: number;
    /**
     * player position on x-axis
     */
    x: number;
  };

  rotate: {
    /**
     * The angle where the player is facing (in radians)
     */
    angle: number;
    /**
     * The player instance
     */
    player: ThisType<Player<PlayerEvents>>;
  };

  punch: {
    /**
     * the punch direction (in radians)
     */
    direction: number;
    /**
     * tells if the player successfully hit something
     */
    didHit: boolean;
    /**
     * The player instance
     */
    player: ThisType<Player<PlayerEvents>>;

    // TODO: Add weapons field
  };

  chat: {
    /**
     * the content of message the player sent
     */
    message: string;
    /**
     * The player instance of who sent the message
     */
    player: ThisType<Player<PlayerEvents>>;
  };

  healthChange: {
    /**
     *  a boolean value indicating whether the player is healing or taking damage.
     */
    isHealing: boolean;
    /**
     * a positive number representing the magnitude of the health change.
     */
    amount: number;
    /**
     * the player instance who initiated the health change.
     */
    player: ThisType<Player<PlayerEvents>>;
  };

  place: GameObject;

  destroyed: null;

  update: ThisType<Player<PlayerEvents>>;
}

/**
 * @member `buildType` The type of object the player is currently holding. If it's -1, it means the player is not holding anything.
 * @member `hatType` Specifies the type of hat the player is wearing, such as a boost hat or soldier hat.
 * @member `weaponType` The type of weapon the player has, which can be used to obtain weapon data.
 * @member `isBestKiller` Indicates whether the player is the best killer, shown by a skull icon.
 * @member `isLeader` Indicates whether the player is the owner of a clan, shown by a crown icon.
 * @member `weaponVariant` Shows the level of the player's weapon (such as stone, gold, etc.).
 * @member `playerID` is a unique identifier for the player (similar to initID).
 * @member `tailType` Describes the type of tail the player has, like wings.
 * @member `maxHealth` the maximum health that the player can have.
 * @member `angle` indicates the direction the player is facing.
 * @member `isMyPlayer` indicates whether the player is yours.
 * @member `initID` is a unique identifier for the player.
 * @member `skinID` the ID or index of the player's skin.
 * @member `layer` Represents the layer of the player.
 * @member `health` the current health of the player.
 * @member `scale` indicates the size of the player.
 * @member `x` the player's position on the x-axis.
 * @member `y` the player's position on the y-axis.
 * @member `teamID` The ID of the player's team.
 * @member `playerName` the name of the player.
 * @member `isInitialized` tells where or not a player have basic information like `id`, `name`, `skinID`, ...etc
 */

export type PlayerType = Player<PlayerEvents>;
export default class Player<T extends PlayerEvents> extends UnifyEmitter<
  EventsObject<PlayerEvents, T>
> {
  #teamID: null | string = null;
  #isBestKiller = false;
  #weaponVariant = 0;
  #isLeader = false;
  #isMyPlayer = false;
  #playerName!: string;
  #weaponType = 0;
  #buildType = -1;
  #maxHealth = 100;
  #playerID!: number;
  #tailType = 0;
  #hatType = 0;
  #health = new PropertyTracker(100);
  #initID!: string;
  #skinID = 0;
  #scale = 35;
  #layer = 0;
  #angle = new PropertyTracker(0);
  #x = new PropertyTracker(0);
  #y = new PropertyTracker(0);

  #isInitialized = false;

  initialize(initializePlayer: InitializePlayer) {
    this.#isMyPlayer = initializePlayer.isMyPlayer;
    this.#playerName = initializePlayer.playerName;
    this.#maxHealth = initializePlayer.maxHealth;
    this.#playerID = initializePlayer.playerID;
    this.#initID = initializePlayer.initID;
    this.#skinID = initializePlayer.skinID;
    this.#scale = initializePlayer.scale;

    this.#health = new PropertyTracker(initializePlayer.health);
    this.#angle = new PropertyTracker(initializePlayer.angle);
    this.#x = new PropertyTracker(initializePlayer.x);
    this.#y = new PropertyTracker(initializePlayer.y);

    this.#isInitialized = true;
  }

  update(playerData: PlayerData) {
    this.#weaponVariant = playerData.weaponVariant;
    this.#isBestKiller = playerData.isBestKiller;
    this.#weaponType = playerData.weaponType;
    this.#buildType = playerData.buildType;
    this.#tailType = playerData.tailType;
    this.#isLeader = playerData.isLeader;
    this.#hatType = playerData.hatType;
    this.#teamID = playerData.teamID;
    this.#layer = playerData.layer;
    this.#angle.set(playerData.angle);
    this.#x.set(playerData.x);
    this.#y.set(playerData.y);

    if (this.#x.isDiff() || this.#y.isDiff()) {
      const deltaX = this.#x.current - (this.#x.previous || 0);
      const deltaY = this.#y.current - (this.#y.previous || 0);

      this.emit("move", {
        direction: Math.atan2(deltaY, deltaX),
        x: this.x,
        y: this.y,
        player: this,
      });
    }

    if (this.#angle.isDiff()) {
      this.emit("rotate", {
        angle: this.angle,
        player: this,
      });
    }

    this.emit("update", this);
  }

  clear() {
    this.emit("destroyed", null);
    this.removeListeners();
  }
  /* prettier-ignore */ get weaponVariant() { return this.#weaponVariant }
  /* prettier-ignore */ get isInitialized() { return this.#isInitialized }
  /* prettier-ignore */ get isBestKiller() { return this.#isBestKiller }
  /* prettier-ignore */ get weaponType() { return this.#weaponType }
  /* prettier-ignore */ get isMyPlayer() { return this.#isMyPlayer }
  /* prettier-ignore */ get playerName() { return this.#playerName }
  /* prettier-ignore */ get health() { return this.#health.current}
  /* prettier-ignore */ get buildType() { return this.#buildType }
  /* prettier-ignore */ get maxHealth() { return this.#maxHealth }
  /* prettier-ignore */ get angle() { return this.#angle.current }
  /* prettier-ignore */ get isLeader() { return this.#isLeader }
  /* prettier-ignore */ get tailType() { return this.#tailType }
  /* prettier-ignore */ get playerID() { return this.#playerID }
  /* prettier-ignore */ get hatType() { return this.#hatType }
  /* prettier-ignore */ get teamID() { return this.#teamID }
  /* prettier-ignore */ get initID() { return this.#initID }
  /* prettier-ignore */ get skinID() { return this.#skinID }
  /* prettier-ignore */ get layer() { return this.#layer }
  /* prettier-ignore */ get scale() { return this.#scale }
  /* prettier-ignore */ get x() { return this.#x.current }
  /* prettier-ignore */ get y() { return this.#y.current }

  setHealth(health: number): void {
    this.#health.set(Math.min(this.maxHealth, Math.max(health, 0)));

    const prev = this.#health.previous ?? 100;
    const curr = this.#health.current;

    this.emit("healthChange", {
      isHealing: prev - curr < 0,
      amount: Math.abs(prev - curr),
      player: this,
    });
  }
  getTeam(teams: Map<string, Team>): Team | null {
    return (this.teamID && teams.get(this.teamID)) || null;
  }
}
