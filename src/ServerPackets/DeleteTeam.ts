import { z } from "zod";

const schema = z.tuple([z.string()]);

/**
 * @packet-id "ad"
 * @description **DeleteTeam** is a signal that indicates when a team is been deleted or destroyed.
 * @member `title` is the title of the team.
 */
export default class DeleteTeam {
  public static readonly PACKET_ID = "ad";
  public static readonly PACKET_NAME = "DeleteTeam";
  public readonly PACKET_NAME = "DeleteTeam";

  constructor(readonly title: string) {}

  static parse(data: unknown): DeleteTeam {
    return new DeleteTeam(...schema.parse(data));
  }
}
