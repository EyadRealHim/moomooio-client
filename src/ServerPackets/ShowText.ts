import { z } from "zod";

const schema = z.tuple([z.number(), z.number(), z.number(), z.number()]); // TH4 USAGE IS NOT KNOWN (but moomoo says that its `type`)

/**
 * @packet-id "t"
 * @description **ShowText** is a signal that is received when a player needs to display text on the screen.
 * This signal is typically used for showing healing or damage text.
 * @member `type` specifies the type of text, which can be either "Healing" or "Damage".
 * @member `content` contains the actual text content.
 * @member `x` indicates the position of the text along the x-axis.
 * @member `y` indicates the position of the text along the y-axis.
 */
export default class ShowText {
  public static readonly PACKET_ID = "t";
  public static readonly PACKET_NAME = "ShowText";
  public readonly PACKET_NAME = "ShowText";

  constructor(
    readonly type: "Healing" | "Damage",
    readonly content: string,
    readonly x: number,
    readonly y: number
  ) {}

  static parse(data: unknown): ShowText {
    const [x, y, content] = schema.parse(data);

    return new ShowText(content >= 0 ? "Damage" : "Healing", content.toString(), x, y);
  }
}
