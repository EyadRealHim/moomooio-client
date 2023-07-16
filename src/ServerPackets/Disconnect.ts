/**
 * @packet-id "d"
 * @description  **Disconnect** is a signal for your player, indicating that the connection is lost (disconnected)
 */

export default class Disconnect {
  public static readonly PACKET_ID = "d";
  public static readonly PACKET_NAME = "Disconnect";
  public readonly PACKET_NAME = "Disconnect";

  static parse(_data: unknown): Disconnect {
    return new Disconnect();
  }
}
