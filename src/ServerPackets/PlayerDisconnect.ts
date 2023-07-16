import { z } from "zod";

const schema = z.tuple([z.string()]);

/**
 * @packet-id "4"
 * @description **PlayerDisconnect** informs you about the player who left the game.
 * @member `initID` serves as a unique identifier to identify the player who left the game.
 */
export default class PlayerDisconnect {
  public static readonly PACKET_ID = "4";
  public static readonly PACKET_NAME = "PlayerDisconnect";
  public readonly PACKET_NAME = "PlayerDisconnect";

  constructor(readonly initID: string) {}

  static parse(data: unknown): PlayerDisconnect {
    return new PlayerDisconnect(schema.parse(data)[0]);
  }
}
