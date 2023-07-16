import { z } from "zod";

const schema = z.tuple([z.number(), z.string()]);

/**
 * @packet-id "ch"
 * @description **ReceiveChat** is a signal that is received when someone nearby sends a message in the game.
 * @member `ownerID` is a special ID that identifies the player who sends the message.
 * @member `message` contains the content of the message.
 */
export default class ReceiveChat {
  public static readonly PACKET_ID = "ch";
  public static readonly PACKET_NAME = "ReceiveChat";
  public readonly PACKET_NAME = "ReceiveChat";

  constructor(readonly ownerID: number, readonly message: string) {}

  static parse(data: unknown): ReceiveChat {
    return new ReceiveChat(...schema.parse(data));
  }
}
