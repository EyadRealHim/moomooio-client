import { z } from "zod";

const schema = z.tuple([z.number()]);

/**

 * @packet-id "aa"
 * @description The purpose of **AnimateGameAI** is to let you know how to animate a GameAI (usually used for Mustafa's attack).
 * @member `gameAIID` is a unique identifier for the gameAI.
 */
export default class AnimateGameAI {
  public static readonly PACKET_ID = "aa";
  public static readonly PACKET_NAME = "AnimateGameAI";
  public readonly PACKET_NAME = "AnimateGameAI";

  constructor(readonly gameAIID: number) {}

  static parse(data: unknown): AnimateGameAI {
    return new AnimateGameAI(schema.parse(data)[0]);
  }
}
