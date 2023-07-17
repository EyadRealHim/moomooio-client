import { z } from "zod";

const schema = z.union([z.tuple([z.array(z.number())]), z.tuple([])]);
const chunkSchema = z.tuple([
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
]);

/**
 * @member `uniqueName` If the AI is a cow or pig, this field will contain the name of the cow or pig.
 * Otherwise, it will be `null`.
 * @member `health` This field indicates the current health of the AI..
 * @member `type` specifies the type of AI, which is used to fetch his meta data.
 * @member `rotation` indicates the rotation value of the AI.
 * @member `id` serves as a unique identifier for the AI.
 * @member `x` represents the player's position on the x-axis.
 * @member `y` represents the player's position on the y-axis.
 */
export interface GameAIData {
  readonly uniqueName: string | null;
  readonly health: number;
  readonly type: number;
  readonly rotation: number;
  readonly id: number;
  readonly x: number;
  readonly y: number;
}

/**
 * @packet-id "a"
 * @description **UpdateGameAI** is a packet that holds information about the current status of gameAI in the game.
 * @member `data` a list of PlayerData
 *
 * @member `GameAIData.uniqueName` If the AI is a cow or pig, this field will contain the name of the cow or pig.
 * Otherwise, it will be `null`.
 * @member `GameAIData.health` This field indicates the current health of the AI..
 * @member `GameAIData.type` specifies the type of AI, which is used to fetch his meta data.
 * @member `GameAIData.rotation` indicates the rotation value of the AI.
 * @member `GameAIData.id` serves as a unique identifier for the AI.
 * @member `GameAIData.x` represents the player's position on the x-axis.
 * @member `GameAIData.y` represents the player's position on the y-axis.
 */
export default class UpdateGameAI {
  public static readonly PACKET_ID = "a";
  public static readonly PACKET_NAME = "UpdateGameAI";
  public readonly PACKET_NAME = "UpdateGameAI";

  constructor(readonly data: GameAIData[]) {}

  static parse(data: unknown): UpdateGameAI {
    const result: GameAIData[] = [];
    const info = schema.parse(data)[0];

    if (info)
      for (let i = 0; i < info.length; i += 7) {
        const content = info.slice(i, i + 7);
        const chunk = chunkSchema.parse(content);

        result.push({
          health: chunk[5],
          type: chunk[1],
          rotation: chunk[4],
          // FIXME: uniqueName is string for cows.
          uniqueName: null, // getUniqueName(chunk[6]) || null,
          id: chunk[0],
          x: chunk[2],
          y: chunk[3],
        });
      }

    return new UpdateGameAI(result);
  }
}
