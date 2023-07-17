import { z } from "zod";

const schema = z.tuple([z.array(z.union([z.number(), z.string()]))]);
const chunkSchema = z.tuple([z.number(), z.string(), z.number()]);

/**
 * @member `score` indicates the player's gold score.
 * @member `name` indicates the player's name.
 * @member `id` a special code that uniquely identifies the player.
 */
export interface LeaderBoardMember {
  readonly score: number;
  readonly name: string;
  readonly id: number;
}

/**
 * @packet-id "5"
 * @description **UpdateLeaderBoard** is a packet that holds information about the current status of LeaderBoard in the game.
 * @member `members` is a list of LeaderBoardMember
 *
 * @member `LeaderBoardMember.score` indicates the player's gold score.
 * @member `LeaderBoardMember.name` indicates the player's name.
 * @member `LeaderBoardMember.id` a special code that uniquely identifies the player.
 */
export default class UpdateLeaderBoard {
  public static readonly PACKET_ID = "5";
  public static readonly PACKET_NAME = "UpdateLeaderBoard";
  public readonly PACKET_NAME = "UpdateLeaderBoard";

  constructor(readonly members: LeaderBoardMember[]) {}

  static parse(data: unknown): UpdateLeaderBoard {
    const result: LeaderBoardMember[] = [];
    const info = schema.parse(data)[0];

    for (let i = 0; i < info.length; i += 3) {
      const content = info.slice(i, i + 3);
      const chunk = chunkSchema.parse(content);

      result.push({
        name: chunk[1],
        score: chunk[2],
        id: chunk[0],
      });
    }

    return new UpdateLeaderBoard(result);
  }
}
