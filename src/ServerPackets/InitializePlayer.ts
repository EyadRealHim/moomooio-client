import { z } from "zod";

const initSchema = z.tuple([
  z.string(),
  z.number(),
  z.string(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.unknown(),
]);
const schema = z.tuple([initSchema, z.boolean()]);

/**
 * @packet-id "2"
 * @description `InitializePlayer` is a packet that contains information about a player.
 * @member `isMyPlayer` indicates whether the player is yours.
 * @member `playerName` the name of the player.
 * @member `maxHealth` the maximum health that the player can have.
 * @member `playerID` is a unique identifier for the player (similar to initID).
 * @member `health` the current health of the player.
 * @member `initID` is a unique identifier for the player.
 * @member `skinID` the ID or index of the player's skin.
 * @member `scale` indicates the size of the player.
 * @member `angle` indicates the direction the player is facing.
 * @member `x` the player's position on the x-axis.
 * @member `y` the player's position on the y-axis.
 */
export default class InitializePlayer {
  public static readonly PACKET_ID = "2";
  public static readonly PACKET_NAME = "InitializePlayer";
  public readonly PACKET_NAME = "InitializePlayer";

  constructor(
    readonly isMyPlayer: boolean,
    readonly playerName: string,
    readonly maxHealth: number,
    readonly playerID: number,
    readonly health: number,
    readonly initID: string,
    readonly skinID: number,
    readonly scale: number,
    readonly angle: number,
    readonly x: number,
    readonly y: number
  ) {}

  static parse(data: unknown): InitializePlayer {
    const [
      [initID, playerID, playerName, x, y, angle, health, maxHealth, scale, skinID],
      isMyPlayer,
    ] = schema.parse(data);

    return new InitializePlayer(
      isMyPlayer,
      playerName,
      maxHealth,
      playerID,
      health,
      initID,
      skinID as number, // TODO: Not safe
      scale,
      angle,
      x,
      y
    );
  }
}
