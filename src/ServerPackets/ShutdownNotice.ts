import { z } from "zod";

const schema = z.tuple([z.number()]);
/**
 * @packet-id "20"
 * @description  **ShutdownNotice** is a message for your player that tells you the server is going to shut down.
 * @param `minutes` indicates the number of minutes left before the shutdown.
 * @param `seconds` indicates the number of seconds left before the shutdown.
 */
export default class ShutdownNotice {
  public static readonly PACKET_ID = "20";
  public static readonly PACKET_NAME = "ShutdownNotice";
  public readonly PACKET_NAME = "ShutdownNotice";

  constructor(readonly minutes: number, readonly seconds: number) {}

  static parse(data: unknown): ShutdownNotice {
    const [time] = schema.parse(data);
    return new ShutdownNotice(Math.floor(time / 60), time % 60);
  }
}
