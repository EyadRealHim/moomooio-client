import { z } from "zod";

const schema = z.tuple([z.number(), z.number()]);

/**
 * @packet-id "h"
 * @description **UpdateHealth** is a signal that contains information about a player's new health.
 * @member `playerID` is a special code that identifies the player whose health has changed.
 * @member `playerHealth` represents the player's updated health value.
 */
export default class UpdateHealth {
  public static readonly PACKET_ID = "h";
  public static readonly PACKET_NAME = "UpdateHealth";
  public readonly PACKET_NAME = "UpdateHealth";

  constructor(readonly playerID: number, readonly playerHealth: number) {}

  static parse(data: unknown): UpdateHealth {
    return new UpdateHealth(...schema.parse(data));
  }
}
