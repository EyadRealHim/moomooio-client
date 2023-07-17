import { GameObjectData } from "../ServerPackets/SetObjectsData";
import UnifyEmitter from "unify-emitter";
import { PlayerType } from "./Player";
import items from "../data/items";
import config from "../data/config";

type GameObjectEvents = {
  auth: PlayerType;
  strike: {
    /**
     * specifies the direction in which the object is moved.
     */
    forceDirection: number;
  };
  shoot: {
    /**
     * the turret who does the shoot
     */
    turret: ThisType<GameObject>;

    /**
     *  indicates the current angle the turret is facing (in radian).
     */
    direction: number;
  };
};

/**
 * @member `ownerID` is a special code that identifies the object who owns the object.
 * If the code is `-1`, it means the object is owned by the game itself, such as trees or stones.
 * @member `scale` indicates how big the object is.
 * @member `type` specifies the type of object
 * @member `rotation` indicates the rotation value of the object.
 * @member `id` serves as a unique identifier for the object.
 * @member `x` represents the object's position on the x-axis.
 * @member `y` represents the object's position on the y-axis.
 * @member `dataIndex` is used to fetch its meta data.
 */

export default class GameObject extends UnifyEmitter<GameObjectEvents> {
  #dataIndex!: number | null;
  #isInitialized = false;
  #type!: number | null;
  #rotation!: number;
  #ownerID!: number;
  #scale!: number;
  #id!: number;
  #x!: number;
  #y!: number;

  #data: (typeof items)[number] | null = null;
  #owner: PlayerType | null = null;

  init(gameObjectData: GameObjectData) {
    this.#dataIndex = gameObjectData.dataIndex;
    this.#rotation = gameObjectData.rotation;
    this.#ownerID = gameObjectData.ownerID;
    this.#scale = gameObjectData.scale;
    this.#type = gameObjectData.type;
    this.#id = gameObjectData.id;
    this.#x = gameObjectData.x;
    this.#y = gameObjectData.y;

    this.#data = items[this.#dataIndex ?? -1] ?? null;
    this.#isInitialized = true;
  }

  clear() {
    this.removeListeners();
    this.#data = null;
  }

  get identity():
    | (typeof items)[number]["name"]
    | "tree"
    | "bush"
    | "rock"
    | "gold"
    | "cactus"
    | "unknown" {
    const biomeID =
      this.y >= config.mapScale - config.snowBiomeTop ? 2 : this.y <= config.snowBiomeTop ? 1 : 0;
    return (
      this.#data?.name ??
      (this.#type == 0
        ? "tree"
        : this.#type == 1
        ? biomeID == 2
          ? "cactus"
          : "bush"
        : this.#type == 2
        ? "rock"
        : this.#type == 3
        ? "gold"
        : "unknown")
    );
  }

  __auth(playerOrPlayers: PlayerType | PlayerType[]) {
    if (!this.#isInitialized) return false;

    if (playerOrPlayers instanceof Array) {
      for (let player of playerOrPlayers) {
        if (this.__auth(player)) return true;
      }
    } else if (playerOrPlayers.isInitialized && playerOrPlayers.playerID == this.ownerID) {
      this.#owner = playerOrPlayers;

      playerOrPlayers.emit("place", this);
      this.emit("auth", playerOrPlayers);
      return true;
    }

    return false;
  }

  /* prettier-ignore */ get isInitialized() { return this.#isInitialized }
  /* prettier-ignore */ get dataIndex() { return this.#dataIndex }
  /* prettier-ignore */ get rotation() { return this.#rotation }
  /* prettier-ignore */ get ownerID() { return this.#ownerID }
  /* prettier-ignore */ get owner() { return this.#owner }
  /* prettier-ignore */ get scale() { return this.#scale }
  /* prettier-ignore */ get type() { return this.#type }
  /* prettier-ignore */ get data() { return this.#data }
  /* prettier-ignore */ get id() { return this.#id }
  /* prettier-ignore */ get x() { return this.#x }
  /* prettier-ignore */ get y() { return this.#y }
}
