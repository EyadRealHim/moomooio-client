import { z } from "zod";

type resourceType = z.infer<typeof resourceTypeSchema>;

const resourceTypeSchema = z.union([
  z.literal("wood"),
  z.literal("food"),
  z.literal("stone"),
  z.literal("points"),
  z.literal("kills"),
]);
const schema = z.tuple([resourceTypeSchema, z.number(), z.number()]);

/**
 * @packet-id "9"
 * @description **UpdateResource** is a signal contains information about a new resource value.
 * @member `resourceType` indicates the type of resource being updated, such as food, wood, etc.
 * @member `resourceValue` represents the new value of that resource.
 */
export default class UpdateResource {
  public static readonly PACKET_ID = "9";
  public static readonly PACKET_NAME = "UpdateResource";
  public readonly PACKET_NAME = "UpdateResource";

  constructor(readonly resourceType: resourceType, readonly resourceValue: number) {}

  static parse(data: unknown): UpdateResource {
    const [type, value, _updateView] = schema.parse(data);
    return new UpdateResource(type, value);
  }
}
