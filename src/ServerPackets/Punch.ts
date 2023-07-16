import { z } from "zod";

const schema = z.tuple([z.number(), z.number(), z.number()]);

/**
 * @packet-id "7"
 * @description **Punch** is a signal that shows when a player begins to hit
 * (they may or may not actually hit anyone).
 * @member `weaponType` The type of weapon the player has, which can be used to obtain weapon meta data.
 * @member `ownerID` serves as a unique identifier for the player who did the punch.
 * @member `didHit` tells if the player successfully hit something
 * @member `data` the meta data of the weapon
 */
export default class Punch {
  public static readonly PACKET_ID = "7";
  public static readonly PACKET_NAME = "Punch";
  public readonly PACKET_NAME = "Punch";

  constructor(readonly ownerID: number, readonly didHit: boolean, readonly weaponType: number) {}

  static parse(data: unknown): Punch {
    const [ownerID, didHit, weaponType] = schema.parse(data);
    return new Punch(ownerID, !!didHit, weaponType);
  }
}
