import { z } from "zod";

const schema = z.tuple([z.number(), z.number()]);

/**
 * @packet-id "14"
 * @description **UpdateItemUsage** is used to update the **item usage**.
 * @member `itemID` serves as a unique identifier for placable items such as traps, spikes, and windmills.
 * @member `count` indicates the number of instances your player has placed for that particular item.
 */
export default class UpdateItemUsage {
  public static readonly PACKET_ID = "14";
  public static readonly PACKET_NAME = "UpdateItemUsage";
  public readonly PACKET_NAME = "UpdateItemUsage";

  constructor(readonly itemID: number, readonly count: number) {}

  static parse(data: unknown): UpdateItemUsage {
    return new UpdateItemUsage(...schema.parse(data));
  }
}
