import { z } from "zod";

const chunkSchema = z.tuple([
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.string().nullable(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
  z.number(),
]);
const schema = z.union([
  z.tuple([z.array(z.union([z.string().nullable(), z.number()]))]),
  z.tuple([]),
]);

/**
 * @member `buildType` The type of object the player is currently holding. If it's -1, it means the player is not holding anything.
 * @member `hatType` Specifies the type of hat the player is wearing, such as a boost hat or soldier hat.
 * @member `weaponType` The type of weapon the player has, which can be used to obtain weapon data.
 * @member `isBestKiller` Indicates whether the player is the best killer, shown by a skull icon.
 * @member `isLeader` Indicates whether the player is the owner of a clan, shown by a crown icon.
 * @member `weaponVariant` Shows the level of the player's weapon (such as stone, gold, etc.).
 * @member `tailType` Describes the type of tail the player has, like wings.
 * @member `angle` Indicates the direction the player is facing.
 * @member `layer` Represents the layer of the player.
 * @member `x` The player's position on the x-axis.
 * @member `y` The player's position on the y-axis.
 * @member `teamID` The ID of the player's team.
 */
export interface PlayerData {
  readonly weaponVariant: number;
  readonly isBestKiller: boolean;
  readonly teamID: string | null;
  readonly weaponType: number;
  readonly buildType: number;
  readonly tailType: number;
  readonly isLeader: boolean;
  readonly hatType: number;
  readonly layer: number;
  readonly angle: number;
  readonly playerID: number;
  readonly x: number;
  readonly y: number;
}

/**
 * @packet-id "33"
 * 
@description **UpdatePlayers** is a packet that holds information about the current status of players in the game.
 * @member `players` a list of PlayerData


 * @member `PlayerData.buildType` The type of object the player is currently holding. If it's -1, it means the player is not holding anything.
 * @member `PlayerData.hatType` Specifies the type of hat the player is wearing, such as a boost hat or soldier hat.
 * @member `PlayerData.weaponType` The type of weapon the player has, which can be used to obtain weapon data.
 * @member `PlayerData.isBestKiller` Indicates whether the player is the best killer, shown by a skull icon.
 * @member `PlayerData.isLeader` Indicates whether the player is the owner of a clan, shown by a crown icon.
 * @member `PlayerData.weaponVariant` Shows the level of the player's weapon (such as stone, gold, etc.).
 * @member `PlayerData.tailType` Describes the type of tail the player has, like wings.
 * @member `PlayerData.angle` Indicates the direction the player is facing.
 * @member `PlayerData.layer` Represents the layer of the player.
 * @member `PlayerData.x` The player's position on the x-axis.
 * @member `PlayerData.y` The player's position on the y-axis.
 * @member `PlayerData.teamID` The ID of the player's team.
 */
export default class UpdatePlayers {
  public static readonly PACKET_ID = "33";
  public static readonly PACKET_NAME = "UpdatePlayers";
  public readonly PACKET_NAME = "UpdatePlayers";

  constructor(readonly players: PlayerData[]) {}

  static parse(data: unknown): UpdatePlayers {
    const result: PlayerData[] = [];
    const info = schema.parse(data)[0];

    if (info)
      for (let i = 0; i < info.length; i += 13) {
        const content = info.slice(i, i + 13);

        const chunk = chunkSchema.parse(content);

        result.push({
          isBestKiller: !!chunk[11],
          weaponVariant: chunk[6],
          weaponType: chunk[5],
          buildType: chunk[4],
          isLeader: !!chunk[8],
          tailType: chunk[10],
          hatType: chunk[9],
          layer: chunk[12],
          teamID: chunk[7],
          angle: chunk[3],
          playerID: chunk[0],
          x: chunk[1],
          y: chunk[2],
        });
      }

    return new UpdatePlayers(result);
  }
}
