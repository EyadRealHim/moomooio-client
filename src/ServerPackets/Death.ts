/**
 * @packet-id "11"
 * @description  **Death** is a signal for your player, indicating that they have died.
 */
export default class Death {
  public static readonly PACKET_ID = "11";
  public static readonly PACKET_NAME = "Death";
  public readonly PACKET_NAME = "Death";

  static parse(_data: unknown): Death {
    return new Death();
  }
}
