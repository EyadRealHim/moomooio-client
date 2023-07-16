import { z } from "zod";

const schema = z.tuple([z.number(), z.number()]);

/**
 * @packet-id "p"
 * @description **TeamSignal** is a signal that is broadcasted to all the team members.
 * This signal is usually used for asking for `help` and it only appears on the **mini map**.
 * @member `x` represents the position of the signal on the x-axis.
 * @member `y` represents the position of the signal on the y-axis.
 */
export default class TeamSignal {
  public static readonly PACKET_ID = "p";
  public static readonly PACKET_NAME = "TeamSignal";
  public readonly PACKET_NAME = "TeamSignal";

  constructor(readonly x: number, readonly y: number) {}

  static parse(data: unknown): TeamSignal {
    return new TeamSignal(...schema.parse(data));
  }
}
