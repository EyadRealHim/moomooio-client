import { z } from "zod";

const schema = z.tuple([z.number()]);

/**
 * @packet-id "1"
 * @description **InitializeGame** is a signal carries your player id.
 * @member `MyPlayerID` is the unique identifier for your player.
 */
export default class InitializeGame {
  public static readonly PACKET_ID = "1";
  public static readonly PACKET_NAME = "InitializeGame";
  public readonly PACKET_NAME = "InitializeGame";

  constructor(readonly MyPlayerID: number) {}

  static parse(data: unknown): InitializeGame {
    return new InitializeGame(schema.parse(data)[0]);
  }
}
