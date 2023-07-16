import { z } from "zod";

const teamSchema = z.object({
  owner: z.number(),
  sid: z.string(),
});
const schema = z.tuple([
  z.object({
    teams: z.array(teamSchema),
  }),
]);

/**
 * @member `ownerID` is a unique identifier for the player who created and owns the team.
 * @member `title` is the title of the team.
 */
interface TeamData {
  readonly ownerID: number;
  readonly title: string;
}

/**
 * @packet-id "id"
 * @description **InitializeTeams** is a signal carries the teams that already been created.
 * @member `teams` is a list of TeamData
 *
 * @member `TeamData.ownerID` is a unique identifier for the player who created and owns the team.
 * @member `TeamData.title` is the title of the team.
 */
export default class InitializeTeams {
  public static readonly PACKET_ID = "id";
  public static readonly PACKET_NAME = "InitializeTeams";
  public readonly PACKET_NAME = "InitializeTeams";

  constructor(readonly teams: TeamData[]) {}

  static parse(data: unknown): InitializeTeams {
    return new InitializeTeams(
      schema.parse(data)[0].teams.map((team) => {
        return {
          ownerID: team.owner,
          title: team.sid,
        };
      })
    );
  }
}
