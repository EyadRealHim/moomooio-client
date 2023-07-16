/**
 * @packet-id "pp"
 * @description  **Pong** is used to measure the ping.
 */
export default class Pong {
  public static readonly PACKET_ID = "pp";
  public static readonly PACKET_NAME = "Pong";
  public readonly PACKET_NAME = "Pong";

  static parse(_data: unknown): Pong {
    return new Pong();
  }
}
