import { z } from "zod";

const schema = z.tuple([z.number(), z.number()]);

/**
 * @packet-id "sp"
 * @description **TurretShoot** is a signal that is received when a nearby turret shoots.
 * @member `turretID` is a unique identifier for the turret that shot.
 * @member `angle` indicates the current angle the turret is facing (in radian).
 */
export default class TurretShoot {
  public static readonly PACKET_ID = "sp";
  public static readonly PACKET_NAME = "TurretShoot";
  public readonly PACKET_NAME = "TurretShoot";

  constructor(readonly turretID: number, readonly angle: number) {}

  static parse(data: unknown): TurretShoot {
    return new TurretShoot(...schema.parse(data));
  }
}
