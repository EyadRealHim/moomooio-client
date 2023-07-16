import { z } from "zod";

const schema = z.union([
  z.tuple([z.array(z.number()), z.number()]),
  z.tuple([z.array(z.number())]),
]);

/**
 * @packet-id "17"
 * @description The **UpdateItems** class represents a signal that provides information about a player's kit.
 * @member `kit` - An array of item IDs.
 * @member `isWeapon` - Indicates whether the kit belongs to weapons category or items category.
 */
export default class UpdateItems {
  public static readonly PACKET_ID = "17";
  public static readonly PACKET_NAME = "UpdateItems";
  public readonly PACKET_NAME = "UpdateItems";

  constructor(readonly kit: number[], readonly isWeapon: boolean) {}

  static parse(data: unknown): UpdateItems {
    const [kit, isWeapon] = schema.parse(data);

    return new UpdateItems(kit, !!isWeapon);
  }
}
