import { z } from "zod";

const teamSchema = z.object({
  owner: z.number(),
  sid: z.string(),
});
const schema = z.tuple([teamSchema]);

/**
 * @packet-id "ac"
 * @description **CreateTeam** is a signal that indicates when a player creates a team.
 * @member `ownerID` is a unique identifier for the player who created and owns the team.
 * @member `title` is the title of the team.
 */
export default class CreateTeam {
  public static readonly PACKET_ID = "ac";
  public static readonly PACKET_NAME = "CreateTeam";
  public readonly PACKET_NAME = "CreateTeam";

  constructor(readonly ownerID: number, readonly title: string) {}

  static parse(data: unknown): CreateTeam {
    const [info] = schema.parse(data);
    return new CreateTeam(info.owner, info.sid);
  }
}
