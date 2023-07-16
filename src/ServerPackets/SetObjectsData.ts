import { z } from "zod";

const schema = z.tuple([z.array(z.number().nullable())]);
const chunkSchema = z.tuple([
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number().nullable(),
  z.number().nullable(),
  z.number(),
]);
/**
 * @member `ownerID` is a special code that identifies the object who owns the object.
 * If the code is `-1`, it means the object is owned by the game itself, such as trees or stones.
 * @member `scale` indicates how big the object is.
 * @member `type` specifies the type of object
 * @member `rotation` indicates the rotation value of the object.
 * @member `id` serves as a unique identifier for the object.
 * @member `x` represents the object's position on the x-axis.
 * @member `y` represents the object's position on the y-axis.
 * @member `dataIndex` is used to fetch its meta data.
 */
export interface GameObjectData {
  readonly dataIndex: number | null;
  readonly type: number | null;
  readonly rotation: number;
  readonly ownerID: number;
  readonly scale: number;
  readonly id: number;
  readonly x: number;
  readonly y: number;
}

/**
 * @packet-id "6"
 * @description **SetObjectsData** is a packet that holds information about gameObjects.
 * @member `objects` is a list of GameObjectData
 *
 * @member `GameObjectData.ownerID` is a special code that identifies the object who owns the object.
 * If the code is `-1`, it means the object is owned by the game itself, such as trees or stones.
 * @member `GameObjectData.scale` indicates how big the object is.
 * @member `GameObjectData.type` specifies the type of object
 * @member `GameObjectData.rotation` indicates the rotation value of the object.
 * @member `GameObjectData.id` serves as a unique identifier for the object.
 * @member `GameObjectData.x` represents the object's position on the x-axis.
 * @member `GameObjectData.y` represents the object's position on the y-axis.
 * @member `GameObjectData.dataIndex` is used to fetch its meta data.
 */
export default class SetObjectsData {
  public static readonly PACKET_ID = "6";
  public static readonly PACKET_NAME = "SetObjectsData";
  public readonly PACKET_NAME = "SetObjectsData";

  constructor(readonly objects: GameObjectData[]) {}

  static parse(data: unknown): SetObjectsData {
    const result: GameObjectData[] = [];
    const info = schema.parse(data)[0];

    if (info)
      for (let i = 0; i < info.length; i += 8) {
        const content = info.slice(i, i + 8);
        const chunk = chunkSchema.parse(content);

        result.push({
          ownerID: chunk[7],
          scale: chunk[4],
          dataIndex: chunk[6],
          type: chunk[5],
          rotation: chunk[3],
          id: chunk[0],
          x: chunk[1],
          y: chunk[2],
        });
      }

    return new SetObjectsData(result);
  }
}
