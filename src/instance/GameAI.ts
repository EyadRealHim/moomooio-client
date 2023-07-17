import UnifyEmitter from "unify-emitter";
import { GameAIData } from "../ServerPackets/UpdateGameAI";
import PropertyTracker from "../utils/PropertyTracker";

type GameAIEvents = {
  move: {
    /**
     * The direction where the ai is moving (in radians)
     */
    direction: number;
    /**
     * The player instance
     */
    player: ThisType<GameAI>;

    /**
     * ai position on y-axis
     */
    y: number;
    /**
     * ai position on x-axis
     */
    x: number;
  };

  rotate: {
    /**
     * The angle where the ai is facing (in radians)
     */
    angle: number;
    /**
     * The ai instance
     */
    player: ThisType<GameAI>;
  };

  healthChange: {
    /**
     *  a boolean value indicating whether the ai is healing or taking damage.
     */
    isHealing: boolean;
    /**
     * a positive number representing the magnitude of the health change.
     */
    amount: number;
    /**
     * the ai instance who initiated the health change.
     */
    player: ThisType<GameAI>;
  };

  update: ThisType<GameAI>;
};

/**
 * @member `uniqueName` If the AI is a cow or pig, this field will contain the name of the cow or pig.
 * Otherwise, it will be `null`.
 * @member `health` This field indicates the current health of the AI..
 * @member `type` specifies the type of AI, which is used to fetch his meta data.
 * @member `angle` indicates the rotation value of the AI.
 * @member `id` serves as a unique identifier for the AI.
 * @member `x` represents the player's position on the x-axis.
 * @member `y` represents the player's position on the y-axis.
 */

export default class GameAI extends UnifyEmitter<GameAIEvents> {
  #uniqueName!: string | null;
  #health: PropertyTracker<number>;
  #type!: number;
  #angle: PropertyTracker<number>;
  #id!: number;
  #x: PropertyTracker<number>;
  #y: PropertyTracker<number>;

  #isInitialized: boolean = false;

  constructor() {
    super();

    this.#health = new PropertyTracker(0);
    this.#angle = new PropertyTracker(0);
    this.#x = new PropertyTracker(0);
    this.#y = new PropertyTracker(0);
  }

  init(gameObjectData: GameAIData) {
    this.#uniqueName = gameObjectData.uniqueName;
    this.#type = gameObjectData.type;
    this.#id = gameObjectData.id;

    this.#angle.set(gameObjectData.rotation);
    this.#health.set(gameObjectData.health);
    this.#x.set(gameObjectData.x);
    this.#y.set(gameObjectData.y);

    if (this.#isInitialized) {
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

    this.#isInitialized = true;
  }

  get identity() {
    if (this.#type == 0) return "Cow";
    if (this.#type == 1) return "Pig";
    if (this.#type == 2) return "Bull";
    if (this.#type == 3) return "Bully";
    if (this.#type == 4) return "Wolf";
    if (this.#type == 5) return "Quack";
    if (this.#type == 6) return "Moostafa";
    if (this.#type == 7) return "Treasure";
    if (this.#type == 8) return "Moofie";

    return "Unknown";
  }

  get isBoss() {
    return this.#type == 8 || this.#type == 6;
  }

  get isFriendly() {
    return this.#type == 0 || this.#type == 1 || this.#type == 5 || this.#type == 7;
  }

  clear() {
    this.removeListeners();
  }

  /* prettier-ignore */ get isInitialized() { return this.#isInitialized }
  /* prettier-ignore */ get uniqueName() { return this.#uniqueName }
  /* prettier-ignore */ get angle() { return this.#angle.current }
  /* prettier-ignore */ get health() { return this.#health.current }
  /* prettier-ignore */ get type() { return this.#type }
  /* prettier-ignore */ get id() { return this.#id }
  /* prettier-ignore */ get x() { return this.#x.current }
  /* prettier-ignore */ get y() { return this.#y.current }
}
