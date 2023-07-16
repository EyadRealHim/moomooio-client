import { z } from "zod";

const schema = z.tuple([z.number()]);

/**
 * @packet-id "13"
 * @description **RemoveObjects** tells the player which objects to clean
 * @member `ownerID` is a special code that identifies the player who owns the objects.
 * This is helpful for removing many objects at the same time.
 */
export default class RemoveObjects {
  public static readonly PACKET_ID = "13";
  public static readonly PACKET_NAME = "RemoveObjects";
  public readonly PACKET_NAME = "RemoveObjects";

  constructor(readonly ownerID: number) {}

  static parse(data: unknown): RemoveObjects {
    return new RemoveObjects(schema.parse(data)[0]);
  }
}
