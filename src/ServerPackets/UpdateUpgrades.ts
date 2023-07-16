import { z } from "zod";

const schema = z.tuple([z.number(), z.number()]);

/**
 * @packet-id "16"
 * @description **UpdateUpgrades** provides information to the player about their upgrade abilities.
 *
 * @member {number} upgradeLevel - The upgrade level that the player can reach.
 * @member {number} currentUpgradeLevel - The current upgrade level of the player.
 *
 * @depth upgradeLevel is how many upgrades your player can do
 */
export default class UpdateUpgrades {
  public static readonly PACKET_ID = "16";
  public static readonly PACKET_NAME = "UpdateUpgrades";
  public readonly PACKET_NAME = "UpdateUpgrades";

  constructor(readonly upgradeLevel: number, readonly currentUpgradeLevel: number) {}

  static parse(data: unknown): UpdateUpgrades {
    const [points, upgradeAge] = schema.parse(data);
    return new UpdateUpgrades(points + upgradeAge, upgradeAge);
  }
}
