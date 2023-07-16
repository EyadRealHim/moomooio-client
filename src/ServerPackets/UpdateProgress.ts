import { z } from "zod";

const schema = z.union([z.tuple([z.number()]), z.tuple([z.number(), z.number(), z.number()])]);

/**
 * @packet-id "15"
 * @description **UpdateProgress** is a message that informs the player about their progress.
 * @member `currentAge?` refers to the player's current age.
 * @member `currentXP` refers to the player's current experience points (xp).
 * @member `progress?` indicates the player's progress as a percentage.
 * @member `maxXP?` represents the maximum amount of experience points required for the player to advance to the next age.
 */
export default class UpdateProgress {
  public static readonly PACKET_ID = "15";
  public static readonly PACKET_NAME = "UpdateProgress";
  public readonly PACKET_NAME = "UpdateProgress";

  constructor(
    readonly currentAge: number | undefined,
    readonly currentXP: number,
    readonly maxXP: number | undefined
  ) {}

  static parse(data: unknown): UpdateProgress {
    const [currentXP, maxXP, currentAge] = schema.parse(data);
    return new UpdateProgress(currentAge, currentXP, maxXP);
  }
}
