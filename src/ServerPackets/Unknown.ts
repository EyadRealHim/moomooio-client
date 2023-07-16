/**
 * @packet-id "*"
 * @description **Unknown** is a signal for a raw packet that hasn't been `processed` or `dealt` with __correctly__.
 * @member `content` is just the raw structure of that packet.
 */
export default class Unknown {
  public static readonly PACKET_ID = "*";
  public static readonly PACKET_NAME = "Unknown";
  public readonly PACKET_NAME = "Unknown";

  constructor(readonly content: unknown) {}

  static parse(data: unknown): Unknown {
    return new Unknown(data);
  }
}
