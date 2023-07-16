import { z } from "zod";

const schema = z.tuple([z.number(), z.number()]);

/**
 * @packet-id "8"
 * @description **ObjectStrike** is a signal that indicates when a player has successfully hit an gameObject.
 * @member `forceDirection` specifies the direction in which the object is moved.
 * @member `objectID` is a unique identifier for the object who got hit.
 */
export default class ObjectStrike {
  public static readonly PACKET_ID = "8";
  public static readonly PACKET_NAME = "ObjectStrike";
  public readonly PACKET_NAME = "ObjectStrike";

  constructor(readonly forceDirection: number, readonly objectID: number) {}

  static parse(data: unknown): ObjectStrike {
    return new ObjectStrike(...schema.parse(data));
  }
}
