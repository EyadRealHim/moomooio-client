import { z } from "zod";

const schema = z.tuple([z.array(z.union([z.number(), z.string()]))]);
const chunkSchema = z.tuple([z.number(), z.string()]);

/**
 * @member `playerID` is a unique identifier for the player (similar to initID).
 * @member `playerName` the name of the player.
 */
interface TeamMember {
  readonly playerName: string;
  readonly playerID: number;
}

/**
 * @packet-id "sa"
 * @description **UpdateTeamMembersList** is a packet that holds information about the current status of Team Members List in the game.
 * @member `members` is a list of TeamMember
 *
 * @member `TeamMember.playerID` is a unique identifier for the player (similar to initID).
 * @member `TeamMember.playerName` the name of the player.
 */
export default class UpdateTeamMembersList {
  public static readonly PACKET_ID = "sa";
  public static readonly PACKET_NAME = "UpdateTeamMembersList";
  public readonly PACKET_NAME = "UpdateTeamMembersList";

  constructor(readonly members: TeamMember[]) {}

  static parse(data: unknown): UpdateTeamMembersList {
    const result: TeamMember[] = [];
    const info = schema.parse(data)[0];

    if (info)
      for (let i = 0; i < info.length; i += 2) {
        const content = info.slice(i, i + 2);
        const chunk = chunkSchema.parse(content);

        result.push({
          playerName: chunk[1],
          playerID: chunk[0],
        });
      }

    return new UpdateTeamMembersList(result);
  }
}
