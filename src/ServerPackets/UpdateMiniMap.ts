import { z } from "zod";

const schema = z.tuple([z.union([z.array(z.union([z.number(), z.string()])), z.literal(0)])]);
const chunkSchema = z.tuple([z.number(), z.number()]);

/**
 * @member `x` represents the point's position on the x-axis.
 * @member `y` represents the point's position on the y-axis.
 */
export interface Point2D {
  readonly x: number;
  readonly y: number;
}

/**
 * @packet-id "mm"
 * @description **UpdateMiniMap** is a packet that holds information about the current status of mini map in the game.
 * @member `points` is a list of Point2D (each point is teammate position)
 *
 * @member `Point2D.x` represents the point's position on the x-axis.
 * @member `Point2D.y` represents the point's position on the y-axis.
 */
export default class UpdateMiniMap {
  public static readonly PACKET_ID = "mm";
  public static readonly PACKET_NAME = "UpdateMiniMap";
  public readonly PACKET_NAME = "UpdateMiniMap";

  constructor(readonly points: Point2D[]) {}

  static parse(data: unknown): UpdateMiniMap {
    const result: Point2D[] = [];
    const info = schema.parse(data)[0];

    if (info instanceof Array)
      for (let i = 0; i < info.length; i += 2) {
        const content = info.slice(i, i + 2);
        const chunk = chunkSchema.parse(content);

        result.push({
          x: chunk[0],
          y: chunk[1],
        });
      }

    return new UpdateMiniMap(result);
  }
}
