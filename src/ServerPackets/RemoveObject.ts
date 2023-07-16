import { z } from "zod";

const schema = z.tuple([z.number()]);

/**
 * @packet-id "12"
 * @description **RemoveObject** instructs which object need to be removed. This usually means that the object has been **destroyed**.
 * @member `objectID` is a special number that helps identify the object that needs to be removed.
 */
export default class RemoveObject {
  public static readonly PACKET_ID = "12";
  public static readonly PACKET_NAME = "RemoveObject";
  public readonly PACKET_NAME = "RemoveObject";

  constructor(readonly objectID: number) {}

  static parse(data: unknown): RemoveObject {
    return new RemoveObject(schema.parse(data)[0]);
  }
}
