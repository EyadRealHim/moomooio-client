import { z } from "zod";

const schema = z.tuple([z.number(), z.string()]);

/**
 * @packet-id "an"
 * @description **TeamNotification** is an invitation you receive from a player asking you to join your clan.
 * (You can only receive this message if you own the clan you are in.)
 * @member `playerName` refers to the name of the player who asked to join.
 * @member `playerID` is a unique identifier for the player who asked to join.
 */
export default class TeamNotification {
  public static readonly PACKET_ID = "an";
  public static readonly PACKET_NAME = "TeamNotification";
  public readonly PACKET_NAME = "TeamNotification";

  constructor(readonly playerID: number, readonly playerName: string) {}

  static parse(data: unknown): TeamNotification {
    return new TeamNotification(...schema.parse(data));
  }
}
