import { z } from "zod";

const schema = z.tuple([z.string()]);

/**
 * @packet-id "io-init"
 * @description The purpose of **IOInit** is inform the player about their `initID`,
 * @member `initID` serves as a unique identifier for the player.
 */
export default class IOInit {
  public static readonly PACKET_ID = "io-init";
  public static readonly PACKET_NAME = "IOInit";
  public readonly PACKET_NAME = "IOInit";

  constructor(readonly initID: string) {}

  static parse(data: unknown): IOInit {
    return new IOInit(schema.parse(data)[0]);
  }
}
