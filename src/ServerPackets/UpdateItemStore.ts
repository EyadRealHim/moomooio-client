import { z } from "zod";

const schema = z.tuple([z.number(), z.union([z.number(), z.string()]), z.number()]);

/**
 * @packet-id "us"
 * @description **UpdateItemStore** signal is used to handle the process of paying for and equipping items in the store.
 *
 * @member `method` Indicates whether the action is a "Purchased" or "Equipped".
 * @member `type` Specifies the type of item being updated, either "Accessory" or "Hat".
 * @member `itemID` A unique code that identifies the specific item that has been changed.
 */
export default class UpdateItemStore {
  public static readonly PACKET_ID = "us";
  public static readonly PACKET_NAME = "UpdateItemStore";
  public readonly PACKET_NAME = "UpdateItemStore";

  constructor(
    readonly method: "Purchased" | "Equipped",
    readonly type: "Accessory" | "Hat",
    readonly itemID: number
  ) {}

  static parse(data: unknown): UpdateItemStore {
    const [isEquip, itemID, isAccessory] = schema.parse(data);

    return new UpdateItemStore(
      isEquip ? "Equipped" : "Purchased",
      isAccessory ? "Accessory" : "Hat",
      Number(itemID)
    );
  }
}
