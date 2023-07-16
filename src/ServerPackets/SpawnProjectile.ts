import { z } from "zod";

const schema = z.tuple([
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
]);

/**
 * @packet-id "18"
 * @description **SpawnProjectile** is a signal that shows a projectile has been made.
 * @member `range` shows how far the projectile can go.
 * @member `speed` shows how fast the projectile moves.
 * @member `direction` shows the direction the projectile is going (in radians).
 * @member `originX` shows where the projectile starts on the x-axis.
 * @member `originY` shows where the projectile starts on the y-axis.
 * @member `fireDate` shows the time when the projectile was fired (in milliseconds).
 * @member `layer` shows the level the projectile is on (it won't be stopped by objects that is on lower levels).
 * @member `type` shows the type of projectile. that can be used to get projectile meta data.
 * @member `projectileID` unique identifier for the projectile.
 */
export default class SpawnProjectile {
  public static readonly PACKET_ID = "18";
  public static readonly PACKET_NAME = "SpawnProjectile";
  public readonly PACKET_NAME = "SpawnProjectile";

  constructor(
    readonly range: number,
    readonly speed: number,
    readonly layer: number,
    readonly type: number,
    readonly direction: number,
    readonly projectileID: number,
    readonly originX: number,
    readonly originY: number,
    readonly fireDate: number
  ) {}

  static parse(data: unknown): SpawnProjectile {
    const [originX, originY, direction, range, speed, type, layer, id] = schema.parse(data);

    return new SpawnProjectile(
      range,
      speed,
      layer,
      type,
      direction,
      id,
      originX,
      originY,
      Date.now()
    );
  }
}
