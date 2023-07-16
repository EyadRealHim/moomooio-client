import UnifyEmitter, { EventsObject } from 'unify-emitter';
import { z } from 'zod';

/**
 * @packet-id "2"
 * @description `InitializePlayer` is a packet that contains information about a player.
 * @member `isMyPlayer` indicates whether the player is yours.
 * @member `playerName` the name of the player.
 * @member `maxHealth` the maximum health that the player can have.
 * @member `playerID` is a unique identifier for the player (similar to initID).
 * @member `health` the current health of the player.
 * @member `initID` is a unique identifier for the player.
 * @member `skinID` the ID or index of the player's skin.
 * @member `scale` indicates the size of the player.
 * @member `angle` indicates the direction the player is facing.
 * @member `x` the player's position on the x-axis.
 * @member `y` the player's position on the y-axis.
 */
declare class InitializePlayer {
    readonly isMyPlayer: boolean;
    readonly playerName: string;
    readonly maxHealth: number;
    readonly playerID: number;
    readonly health: number;
    readonly initID: string;
    readonly skinID: number;
    readonly scale: number;
    readonly angle: number;
    readonly x: number;
    readonly y: number;
    static readonly PACKET_ID = "2";
    static readonly PACKET_NAME = "InitializePlayer";
    readonly PACKET_NAME = "InitializePlayer";
    constructor(isMyPlayer: boolean, playerName: string, maxHealth: number, playerID: number, health: number, initID: string, skinID: number, scale: number, angle: number, x: number, y: number);
    static parse(data: unknown): InitializePlayer;
}

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
interface PlayerData {
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
declare class UpdatePlayers {
    readonly players: PlayerData[];
    static readonly PACKET_ID = "33";
    static readonly PACKET_NAME = "UpdatePlayers";
    readonly PACKET_NAME = "UpdatePlayers";
    constructor(players: PlayerData[]);
    static parse(data: unknown): UpdatePlayers;
}

interface TeamMember$1 {
    readonly playerName: string;
    readonly playerID: number;
}
declare class Team {
    readonly title: string;
    readonly ownerID: number;
    membersList: TeamMember$1[];
    constructor(title: string, ownerID: number);
}

/**
 * @member `ownerID` is a special code that identifies the object who owns the object.
 * If the code is `-1`, it means the object is owned by the game itself, such as trees or stones.
 * @member `scale` indicates how big the object is.
 * @member `type` specifies the type of object
 * @member `rotation` indicates the rotation value of the object.
 * @member `id` serves as a unique identifier for the object.
 * @member `x` represents the object's position on the x-axis.
 * @member `y` represents the object's position on the y-axis.
 * @member `dataIndex` is used to fetch its meta data.
 */
interface GameObjectData {
    readonly dataIndex: number | null;
    readonly type: number | null;
    readonly rotation: number;
    readonly ownerID: number;
    readonly scale: number;
    readonly id: number;
    readonly x: number;
    readonly y: number;
}
/**
 * @packet-id "6"
 * @description **SetObjectsData** is a packet that holds information about gameObjects.
 * @member `objects` is a list of GameObjectData
 *
 * @member `GameObjectData.ownerID` is a special code that identifies the object who owns the object.
 * If the code is `-1`, it means the object is owned by the game itself, such as trees or stones.
 * @member `GameObjectData.scale` indicates how big the object is.
 * @member `GameObjectData.type` specifies the type of object
 * @member `GameObjectData.rotation` indicates the rotation value of the object.
 * @member `GameObjectData.id` serves as a unique identifier for the object.
 * @member `GameObjectData.x` represents the object's position on the x-axis.
 * @member `GameObjectData.y` represents the object's position on the y-axis.
 * @member `GameObjectData.dataIndex` is used to fetch its meta data.
 */
declare class SetObjectsData {
    readonly objects: GameObjectData[];
    static readonly PACKET_ID = "6";
    static readonly PACKET_NAME = "SetObjectsData";
    readonly PACKET_NAME = "SetObjectsData";
    constructor(objects: GameObjectData[]);
    static parse(data: unknown): SetObjectsData;
}

declare const _default$3: Readonly<{
    readonly age: -1;
    readonly group: 0;
    readonly name: "apple";
    readonly desc: "restores 20 health when consumed";
    readonly req: readonly [readonly ["food", 10]];
    readonly scale: 22;
    readonly holdOffset: 15;
    readonly id: 0;
} | {
    readonly age: 3;
    readonly group: 0;
    readonly name: "cookie";
    readonly desc: "restores 40 health when consumed";
    readonly req: readonly [readonly ["food", 15]];
    readonly scale: 27;
    readonly holdOffset: 15;
    readonly id: 1;
} | {
    readonly age: 7;
    readonly group: 0;
    readonly name: "cheese";
    readonly desc: "restores 30 health and another 50 over 5 seconds";
    readonly req: readonly [readonly ["food", 25]];
    readonly scale: 27;
    readonly holdOffset: 15;
    readonly id: 2;
} | {
    readonly age: -1;
    readonly group: 1;
    readonly name: "wood wall";
    readonly desc: "provides protection for your village";
    readonly req: readonly [readonly ["wood", 10]];
    readonly projDmg: true;
    readonly health: 380;
    readonly scale: 50;
    readonly holdOffset: 20;
    readonly placeOffset: -5;
    readonly id: 3;
} | {
    readonly age: 3;
    readonly group: 1;
    readonly name: "stone wall";
    readonly desc: "provides improved protection for your village";
    readonly req: readonly [readonly ["stone", 25]];
    readonly health: 900;
    readonly scale: 50;
    readonly holdOffset: 20;
    readonly placeOffset: -5;
    readonly id: 4;
} | {
    readonly age: 7;
    readonly pre: 4;
    readonly group: 1;
    readonly name: "castle wall";
    readonly desc: "provides powerful protection for your village";
    readonly req: readonly [readonly ["stone", 35]];
    readonly health: 1500;
    readonly scale: 52;
    readonly holdOffset: 20;
    readonly placeOffset: -5;
    readonly id: 5;
} | {
    readonly age: -1;
    readonly group: 2;
    readonly name: "spikes";
    readonly desc: "damages enemies when they touch them";
    readonly req: readonly [readonly ["wood", 20], readonly ["stone", 5]];
    readonly health: 400;
    readonly dmg: 20;
    readonly scale: 49;
    readonly spritePadding: -23;
    readonly holdOffset: 8;
    readonly placeOffset: -5;
    readonly id: 6;
} | {
    readonly age: 5;
    readonly group: 2;
    readonly name: "greater spikes";
    readonly desc: "damages enemies when they touch them";
    readonly req: readonly [readonly ["wood", 30], readonly ["stone", 10]];
    readonly health: 500;
    readonly dmg: 35;
    readonly scale: 52;
    readonly spritePadding: -23;
    readonly holdOffset: 8;
    readonly placeOffset: -5;
    readonly id: 7;
} | {
    readonly age: 9;
    readonly pre: 7;
    readonly group: 2;
    readonly name: "poison spikes";
    readonly desc: "poisons enemies when they touch them";
    readonly req: readonly [readonly ["wood", 35], readonly ["stone", 15]];
    readonly health: 600;
    readonly dmg: 30;
    readonly pDmg: 5;
    readonly scale: 52;
    readonly spritePadding: -23;
    readonly holdOffset: 8;
    readonly placeOffset: -5;
    readonly id: 8;
} | {
    readonly age: 9;
    readonly pre: 7;
    readonly group: 2;
    readonly name: "spinning spikes";
    readonly desc: "damages enemies when they touch them";
    readonly req: readonly [readonly ["wood", 30], readonly ["stone", 20]];
    readonly health: 500;
    readonly dmg: 45;
    readonly turnSpeed: 0.003;
    readonly scale: 52;
    readonly spritePadding: -23;
    readonly holdOffset: 8;
    readonly placeOffset: -5;
    readonly id: 9;
} | {
    readonly age: -1;
    readonly group: 3;
    readonly name: "windmill";
    readonly desc: "generates gold over time";
    readonly req: readonly [readonly ["wood", 50], readonly ["stone", 10]];
    readonly health: 400;
    readonly pps: 1;
    readonly turnSpeed: 0.0016;
    readonly spritePadding: 25;
    readonly iconLineMulti: 12;
    readonly scale: 45;
    readonly holdOffset: 20;
    readonly placeOffset: 5;
    readonly id: 10;
} | {
    readonly age: 5;
    readonly pre: 10;
    readonly group: 3;
    readonly name: "faster windmill";
    readonly desc: "generates more gold over time";
    readonly req: readonly [readonly ["wood", 60], readonly ["stone", 20]];
    readonly health: 500;
    readonly pps: 1.5;
    readonly turnSpeed: 0.0025;
    readonly spritePadding: 25;
    readonly iconLineMulti: 12;
    readonly scale: 47;
    readonly holdOffset: 20;
    readonly placeOffset: 5;
    readonly id: 11;
} | {
    readonly age: 8;
    readonly pre: 11;
    readonly group: 3;
    readonly name: "power mill";
    readonly desc: "generates more gold over time";
    readonly req: readonly [readonly ["wood", 100], readonly ["stone", 50]];
    readonly health: 800;
    readonly pps: 2;
    readonly turnSpeed: 0.005;
    readonly spritePadding: 25;
    readonly iconLineMulti: 12;
    readonly scale: 47;
    readonly holdOffset: 20;
    readonly placeOffset: 5;
    readonly id: 12;
} | {
    readonly age: 5;
    readonly group: 4;
    readonly type: 2;
    readonly name: "mine";
    readonly desc: "allows you to mine stone";
    readonly req: readonly [readonly ["wood", 20], readonly ["stone", 100]];
    readonly iconLineMulti: 12;
    readonly scale: 65;
    readonly holdOffset: 20;
    readonly placeOffset: 0;
    readonly id: 13;
} | {
    readonly age: 5;
    readonly group: 11;
    readonly type: 0;
    readonly name: "sapling";
    readonly desc: "allows you to farm wood";
    readonly req: readonly [readonly ["wood", 150], readonly ["wood", 30]];
    readonly iconLineMulti: 12;
    readonly colDiv: 0.5;
    readonly scale: 110;
    readonly holdOffset: 50;
    readonly placeOffset: -15;
    readonly id: 14;
} | {
    readonly age: 4;
    readonly group: 5;
    readonly name: "pit trap";
    readonly desc: "pit that traps enemies if they walk over it";
    readonly req: readonly [readonly ["wood", 30], readonly ["stone", 30]];
    readonly trap: true;
    readonly ignoreCollision: true;
    readonly hideFromEnemy: true;
    readonly health: 500;
    readonly colDiv: 0.2;
    readonly scale: 50;
    readonly holdOffset: 20;
    readonly placeOffset: -5;
    readonly id: 15;
} | {
    readonly age: 4;
    readonly group: 6;
    readonly name: "boost pad";
    readonly desc: "provides boost when stepped on";
    readonly req: readonly [readonly ["stone", 20], readonly ["wood", 5]];
    readonly ignoreCollision: true;
    readonly boostSpeed: 1.5;
    readonly health: 150;
    readonly colDiv: 0.7;
    readonly scale: 45;
    readonly holdOffset: 20;
    readonly placeOffset: -5;
    readonly id: 16;
} | {
    readonly age: 7;
    readonly group: 7;
    readonly doUpdate: true;
    readonly name: "turret";
    readonly desc: "defensive structure that shoots at enemies";
    readonly req: readonly [readonly ["wood", 200], readonly ["stone", 150]];
    readonly health: 800;
    readonly projectile: 1;
    readonly shootRange: 700;
    readonly shootRate: 2200;
    readonly scale: 43;
    readonly holdOffset: 20;
    readonly placeOffset: -5;
    readonly id: 17;
} | {
    readonly age: 7;
    readonly group: 8;
    readonly name: "platform";
    readonly desc: "platform to shoot over walls and cross over water";
    readonly req: readonly [readonly ["wood", 20]];
    readonly ignoreCollision: true;
    readonly zIndex: 1;
    readonly health: 300;
    readonly scale: 43;
    readonly holdOffset: 20;
    readonly placeOffset: -5;
    readonly id: 18;
} | {
    readonly age: 7;
    readonly group: 9;
    readonly name: "healing pad";
    readonly desc: "standing on it will slowly heal you";
    readonly req: readonly [readonly ["wood", 30], readonly ["food", 10]];
    readonly ignoreCollision: true;
    readonly healCol: 15;
    readonly health: 400;
    readonly colDiv: 0.7;
    readonly scale: 45;
    readonly holdOffset: 20;
    readonly placeOffset: -5;
    readonly id: 19;
} | {
    readonly age: 9;
    readonly group: 10;
    readonly name: "spawn pad";
    readonly desc: "you will spawn here when you die but it will disappear";
    readonly req: readonly [readonly ["wood", 100], readonly ["stone", 100]];
    readonly health: 400;
    readonly ignoreCollision: true;
    readonly spawnPoint: true;
    readonly scale: 45;
    readonly holdOffset: 20;
    readonly placeOffset: -5;
    readonly id: 20;
} | {
    readonly age: 7;
    readonly group: 12;
    readonly name: "blocker";
    readonly desc: "blocks building in radius";
    readonly req: readonly [readonly ["wood", 30], readonly ["stone", 25]];
    readonly ignoreCollision: true;
    readonly blocker: 300;
    readonly health: 400;
    readonly colDiv: 0.7;
    readonly scale: 45;
    readonly holdOffset: 20;
    readonly placeOffset: -5;
    readonly id: 21;
} | {
    readonly age: 7;
    readonly group: 13;
    readonly name: "teleporter";
    readonly desc: "teleports you to a random point on the map";
    readonly req: readonly [readonly ["wood", 60], readonly ["stone", 60]];
    readonly ignoreCollision: true;
    readonly teleport: true;
    readonly health: 200;
    readonly colDiv: 0.7;
    readonly scale: 45;
    readonly holdOffset: 20;
    readonly placeOffset: -5;
    readonly id: 22;
}>[];

type GameObjectEvents = {
    auth: PlayerType;
    strike: {
        /**
         * specifies the direction in which the object is moved.
         */
        forceDirection: number;
    };
};
/**
 * @member `ownerID` is a special code that identifies the object who owns the object.
 * If the code is `-1`, it means the object is owned by the game itself, such as trees or stones.
 * @member `scale` indicates how big the object is.
 * @member `type` specifies the type of object
 * @member `rotation` indicates the rotation value of the object.
 * @member `id` serves as a unique identifier for the object.
 * @member `x` represents the object's position on the x-axis.
 * @member `y` represents the object's position on the y-axis.
 * @member `dataIndex` is used to fetch its meta data.
 */
declare class GameObject extends UnifyEmitter<GameObjectEvents> {
    #private;
    init(gameObjectData: GameObjectData): void;
    get identity(): (typeof _default$3)[number]["name"] | "tree" | "bush" | "rock" | "gold" | "cactus" | "unknown";
    __auth(playerOrPlayers: PlayerType | PlayerType[]): boolean;
    get isInitialized(): boolean;
    get dataIndex(): number | null;
    get rotation(): number;
    get ownerID(): number;
    get owner(): PlayerType | null;
    get scale(): number;
    get type(): number | null;
    get data(): Readonly<{
        readonly age: -1;
        readonly group: 0;
        readonly name: "apple";
        readonly desc: "restores 20 health when consumed";
        readonly req: readonly [readonly ["food", 10]];
        readonly scale: 22;
        readonly holdOffset: 15;
        readonly id: 0;
    } | {
        readonly age: 3;
        readonly group: 0;
        readonly name: "cookie";
        /**
         * specifies the direction in which the object is moved.
         */
        readonly desc: "restores 40 health when consumed";
        readonly req: readonly [readonly ["food", 15]];
        readonly scale: 27;
        readonly holdOffset: 15;
        readonly id: 1;
    } | {
        readonly age: 7;
        readonly group: 0;
        readonly name: "cheese";
        readonly desc: "restores 30 health and another 50 over 5 seconds";
        readonly req: readonly [readonly ["food", 25]];
        readonly scale: 27;
        readonly holdOffset: 15;
        readonly id: 2;
    } | {
        readonly age: -1;
        readonly group: 1;
        readonly name: "wood wall";
        readonly desc: "provides protection for your village";
        readonly req: readonly [readonly ["wood", 10]];
        readonly projDmg: true;
        readonly health: 380;
        readonly scale: 50;
        readonly holdOffset: 20;
        readonly placeOffset: -5;
        readonly id: 3;
    } | {
        readonly age: 3;
        readonly group: 1;
        readonly name: "stone wall";
        readonly desc: "provides improved protection for your village";
        readonly req: readonly [readonly ["stone", 25]];
        readonly health: 900;
        readonly scale: 50;
        readonly holdOffset: 20;
        readonly placeOffset: -5;
        readonly id: 4;
    } | {
        readonly age: 7;
        readonly pre: 4;
        readonly group: 1;
        readonly name: "castle wall";
        readonly desc: "provides powerful protection for your village";
        readonly req: readonly [readonly ["stone", 35]];
        readonly health: 1500;
        readonly scale: 52;
        readonly holdOffset: 20;
        readonly placeOffset: -5;
        readonly id: 5;
    } | {
        readonly age: -1;
        readonly group: 2;
        readonly name: "spikes";
        readonly desc: "damages enemies when they touch them";
        readonly req: readonly [readonly ["wood", 20], readonly ["stone", 5]];
        readonly health: 400;
        readonly dmg: 20;
        readonly scale: 49;
        readonly spritePadding: -23;
        readonly holdOffset: 8;
        readonly placeOffset: -5;
        readonly id: 6;
    } | {
        readonly age: 5;
        readonly group: 2;
        readonly name: "greater spikes";
        readonly desc: "damages enemies when they touch them";
        readonly req: readonly [readonly ["wood", 30], readonly ["stone", 10]];
        readonly health: 500;
        readonly dmg: 35;
        readonly scale: 52;
        readonly spritePadding: -23;
        readonly holdOffset: 8;
        readonly placeOffset: -5;
        readonly id: 7;
    } | {
        readonly age: 9;
        readonly pre: 7;
        readonly group: 2;
        readonly name: "poison spikes";
        readonly desc: "poisons enemies when they touch them";
        readonly req: readonly [readonly ["wood", 35], readonly ["stone", 15]];
        readonly health: 600;
        readonly dmg: 30;
        readonly pDmg: 5;
        readonly scale: 52;
        readonly spritePadding: -23;
        readonly holdOffset: 8;
        readonly placeOffset: -5;
        readonly id: 8;
    } | {
        readonly age: 9;
        readonly pre: 7;
        readonly group: 2;
        readonly name: "spinning spikes";
        readonly desc: "damages enemies when they touch them";
        readonly req: readonly [readonly ["wood", 30], readonly ["stone", 20]];
        readonly health: 500;
        readonly dmg: 45;
        readonly turnSpeed: 0.003;
        readonly scale: 52;
        readonly spritePadding: -23;
        readonly holdOffset: 8;
        readonly placeOffset: -5;
        readonly id: 9;
    } | {
        readonly age: -1;
        readonly group: 3;
        readonly name: "windmill";
        readonly desc: "generates gold over time";
        readonly req: readonly [readonly ["wood", 50], readonly ["stone", 10]];
        readonly health: 400;
        readonly pps: 1;
        readonly turnSpeed: 0.0016;
        readonly spritePadding: 25;
        readonly iconLineMulti: 12;
        readonly scale: 45;
        readonly holdOffset: 20;
        readonly placeOffset: 5;
        readonly id: 10;
    } | {
        readonly age: 5;
        readonly pre: 10;
        readonly group: 3;
        readonly name: "faster windmill";
        readonly desc: "generates more gold over time";
        readonly req: readonly [readonly ["wood", 60], readonly ["stone", 20]];
        readonly health: 500;
        readonly pps: 1.5;
        readonly turnSpeed: 0.0025;
        readonly spritePadding: 25;
        readonly iconLineMulti: 12;
        readonly scale: 47;
        readonly holdOffset: 20;
        readonly placeOffset: 5;
        readonly id: 11;
    } | {
        readonly age: 8;
        readonly pre: 11;
        readonly group: 3;
        readonly name: "power mill";
        readonly desc: "generates more gold over time";
        readonly req: readonly [readonly ["wood", 100], readonly ["stone", 50]];
        readonly health: 800;
        readonly pps: 2;
        readonly turnSpeed: 0.005;
        readonly spritePadding: 25;
        readonly iconLineMulti: 12;
        readonly scale: 47;
        readonly holdOffset: 20;
        readonly placeOffset: 5;
        readonly id: 12;
    } | {
        readonly age: 5;
        readonly group: 4;
        readonly type: 2;
        readonly name: "mine";
        readonly desc: "allows you to mine stone";
        readonly req: readonly [readonly ["wood", 20], readonly ["stone", 100]];
        readonly iconLineMulti: 12;
        readonly scale: 65;
        readonly holdOffset: 20;
        readonly placeOffset: 0;
        readonly id: 13;
    } | {
        readonly age: 5;
        readonly group: 11;
        readonly type: 0;
        readonly name: "sapling";
        readonly desc: "allows you to farm wood";
        readonly req: readonly [readonly ["wood", 150], readonly ["wood", 30]];
        readonly iconLineMulti: 12;
        readonly colDiv: 0.5;
        readonly scale: 110;
        readonly holdOffset: 50;
        readonly placeOffset: -15;
        readonly id: 14;
    } | {
        readonly age: 4;
        readonly group: 5;
        readonly name: "pit trap";
        readonly desc: "pit that traps enemies if they walk over it";
        readonly req: readonly [readonly ["wood", 30], readonly ["stone", 30]];
        readonly trap: true;
        readonly ignoreCollision: true;
        readonly hideFromEnemy: true;
        readonly health: 500;
        readonly colDiv: 0.2;
        readonly scale: 50;
        readonly holdOffset: 20;
        readonly placeOffset: -5;
        readonly id: 15;
    } | {
        readonly age: 4;
        readonly group: 6;
        readonly name: "boost pad";
        readonly desc: "provides boost when stepped on";
        readonly req: readonly [readonly ["stone", 20], readonly ["wood", 5]];
        readonly ignoreCollision: true;
        readonly boostSpeed: 1.5;
        readonly health: 150;
        readonly colDiv: 0.7;
        readonly scale: 45;
        readonly holdOffset: 20;
        readonly placeOffset: -5;
        readonly id: 16;
    } | {
        readonly age: 7;
        readonly group: 7;
        readonly doUpdate: true;
        readonly name: "turret";
        readonly desc: "defensive structure that shoots at enemies";
        readonly req: readonly [readonly ["wood", 200], readonly ["stone", 150]];
        readonly health: 800;
        readonly projectile: 1;
        readonly shootRange: 700;
        readonly shootRate: 2200;
        readonly scale: 43;
        readonly holdOffset: 20;
        readonly placeOffset: -5;
        readonly id: 17;
    } | {
        readonly age: 7;
        readonly group: 8;
        readonly name: "platform";
        readonly desc: "platform to shoot over walls and cross over water";
        readonly req: readonly [readonly ["wood", 20]];
        readonly ignoreCollision: true;
        readonly zIndex: 1;
        readonly health: 300;
        readonly scale: 43;
        readonly holdOffset: 20;
        readonly placeOffset: -5;
        readonly id: 18;
    } | {
        readonly age: 7;
        readonly group: 9;
        readonly name: "healing pad";
        readonly desc: "standing on it will slowly heal you";
        readonly req: readonly [readonly ["wood", 30], readonly ["food", 10]];
        readonly ignoreCollision: true;
        readonly healCol: 15;
        readonly health: 400;
        readonly colDiv: 0.7;
        readonly scale: 45;
        readonly holdOffset: 20;
        readonly placeOffset: -5;
        readonly id: 19;
    } | {
        readonly age: 9;
        readonly group: 10;
        readonly name: "spawn pad";
        readonly desc: "you will spawn here when you die but it will disappear";
        readonly req: readonly [readonly ["wood", 100], readonly ["stone", 100]];
        readonly health: 400;
        readonly ignoreCollision: true;
        readonly spawnPoint: true;
        readonly scale: 45;
        readonly holdOffset: 20;
        readonly placeOffset: -5;
        readonly id: 20;
    } | {
        readonly age: 7;
        readonly group: 12;
        readonly name: "blocker";
        readonly desc: "blocks building in radius";
        readonly req: readonly [readonly ["wood", 30], readonly ["stone", 25]];
        readonly ignoreCollision: true;
        readonly blocker: 300;
        readonly health: 400;
        readonly colDiv: 0.7;
        readonly scale: 45;
        readonly holdOffset: 20;
        readonly placeOffset: -5;
        readonly id: 21;
    } | {
        readonly age: 7;
        readonly group: 13;
        readonly name: "teleporter";
        readonly desc: "teleports you to a random point on the map";
        readonly req: readonly [readonly ["wood", 60], readonly ["stone", 60]];
        readonly ignoreCollision: true;
        readonly teleport: true;
        readonly health: 200;
        readonly colDiv: 0.7;
        readonly scale: 45;
        readonly holdOffset: 20;
        readonly placeOffset: -5;
        readonly id: 22;
    }> | null;
    get id(): number;
    get x(): number;
    get y(): number;
}

interface PlayerEvents {
    move: {
        /**
         * The direction where the player is moving (in radians) or `null` which mean player stops move
         */
        direction: number | null;
        /**
         * The player instance
         */
        player: ThisType<Player<PlayerEvents>>;
        /**
         * player position on y-axis
         */
        y: number;
        /**
         * player position on x-axis
         */
        x: number;
    };
    rotate: {
        /**
         * The angle where the player is facing (in radians)
         */
        angle: number;
        /**
         * The player instance
         */
        player: ThisType<Player<PlayerEvents>>;
    };
    punch: {
        /**
         * the punch direction (in radians)
         */
        direction: number;
        /**
         * tells if the player successfully hit something
         */
        didHit: boolean;
        /**
         * The player instance
         */
        player: ThisType<Player<PlayerEvents>>;
    };
    chat: {
        /**
         * the content of message the player sent
         */
        message: string;
        /**
         * The player instance of who sent the message
         */
        player: ThisType<Player<PlayerEvents>>;
    };
    healthChange: {
        /**
         *  a boolean value indicating whether the player is healing or taking damage.
         */
        isHealing: boolean;
        /**
         * a positive number representing the magnitude of the health change.
         */
        amount: number;
        /**
         * the player instance who initiated the health change.
         */
        player: ThisType<Player<PlayerEvents>>;
    };
    place: GameObject;
    destroyed: null;
    update: ThisType<Player<PlayerEvents>>;
}
/**
 * @member `buildType` The type of object the player is currently holding. If it's -1, it means the player is not holding anything.
 * @member `hatType` Specifies the type of hat the player is wearing, such as a boost hat or soldier hat.
 * @member `weaponType` The type of weapon the player has, which can be used to obtain weapon data.
 * @member `isBestKiller` Indicates whether the player is the best killer, shown by a skull icon.
 * @member `isLeader` Indicates whether the player is the owner of a clan, shown by a crown icon.
 * @member `weaponVariant` Shows the level of the player's weapon (such as stone, gold, etc.).
 * @member `playerID` is a unique identifier for the player (similar to initID).
 * @member `tailType` Describes the type of tail the player has, like wings.
 * @member `maxHealth` the maximum health that the player can have.
 * @member `angle` indicates the direction the player is facing.
 * @member `isMyPlayer` indicates whether the player is yours.
 * @member `initID` is a unique identifier for the player.
 * @member `skinID` the ID or index of the player's skin.
 * @member `layer` Represents the layer of the player.
 * @member `health` the current health of the player.
 * @member `scale` indicates the size of the player.
 * @member `x` the player's position on the x-axis.
 * @member `y` the player's position on the y-axis.
 * @member `teamID` The ID of the player's team.
 * @member `playerName` the name of the player.
 * @member `isInitialized` tells where or not a player have basic information like `id`, `name`, `skinID`, ...etc
 */
type PlayerType = Player<PlayerEvents>;
declare class Player<T extends PlayerEvents> extends UnifyEmitter<EventsObject<PlayerEvents, T>> {
    #private;
    initialize(initializePlayer: InitializePlayer): void;
    update(playerData: PlayerData): void;
    clear(): void;
    get weaponVariant(): number;
    get isInitialized(): boolean;
    get isBestKiller(): boolean;
    get weaponType(): number;
    get isMyPlayer(): boolean;
    get playerName(): string;
    get health(): number;
    get buildType(): number;
    get maxHealth(): number;
    get angle(): number;
    get isLeader(): boolean;
    get tailType(): number;
    get playerID(): number;
    get hatType(): number;
    get teamID(): string | null;
    get initID(): string;
    get skinID(): number;
    get layer(): number;
    get scale(): number;
    get x(): number;
    get y(): number;
    setHealth(health: number): void;
    getTeam(teams: Map<string, Team>): Team | null;
}

interface ObservedPacket {
    PACKET_ID: string;
    current: number;
    max: number;
    is(content: Uint8Array): boolean;
}
declare class AntiKick {
    observePackets: ObservedPacket[];
    interval: NodeJS.Timeout;
    constructor();
    destroy(): void;
    restart(): void;
    canSend(content: Uint8Array): boolean;
    static runObservePacket(observePacket: ObservedPacket): boolean;
    static resetObservePacket(observePacket: ObservedPacket): void;
}

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
declare class UpdateTeamMembersList {
    readonly members: TeamMember[];
    static readonly PACKET_ID = "sa";
    static readonly PACKET_NAME = "UpdateTeamMembersList";
    readonly PACKET_NAME = "UpdateTeamMembersList";
    constructor(members: TeamMember[]);
    static parse(data: unknown): UpdateTeamMembersList;
}

/**
 * @member `score` indicates the player's gold score.
 * @member `name` indicates the player's name.
 * @member `id` a special code that uniquely identifies the player.
 */
interface LeaderBoardMember {
    readonly score: number;
    readonly name: string;
    readonly id: number;
}
/**
 * @packet-id "5"
 * @description **UpdateLeaderBoard** is a packet that holds information about the current status of LeaderBoard in the game.
 * @member `members` is a list of LeaderBoardMember
 *
 * @member `LeaderBoardMember.score` indicates the player's gold score.
 * @member `LeaderBoardMember.name` indicates the player's name.
 * @member `LeaderBoardMember.id` a special code that uniquely identifies the player.
 */
declare class UpdateLeaderBoard {
    readonly members: LeaderBoardMember[];
    static readonly PACKET_ID = "5";
    static readonly PACKET_NAME = "UpdateLeaderBoard";
    readonly PACKET_NAME = "UpdateLeaderBoard";
    constructor(members: LeaderBoardMember[]);
    static parse(data: unknown): UpdateLeaderBoard;
}

/**
 * @packet-id "4"
 * @description **PlayerDisconnect** informs you about the player who left the game.
 * @member `initID` serves as a unique identifier to identify the player who left the game.
 */
declare class PlayerDisconnect {
    readonly initID: string;
    static readonly PACKET_ID = "4";
    static readonly PACKET_NAME = "PlayerDisconnect";
    readonly PACKET_NAME = "PlayerDisconnect";
    constructor(initID: string);
    static parse(data: unknown): PlayerDisconnect;
}

/**
 * @packet-id "an"
 * @description **TeamNotification** is an invitation you receive from a player asking you to join your clan.
 * (You can only receive this message if you own the clan you are in.)
 * @member `playerName` refers to the name of the player who asked to join.
 * @member `playerID` is a unique identifier for the player who asked to join.
 */
declare class TeamNotification {
    readonly playerID: number;
    readonly playerName: string;
    static readonly PACKET_ID = "an";
    static readonly PACKET_NAME = "TeamNotification";
    readonly PACKET_NAME = "TeamNotification";
    constructor(playerID: number, playerName: string);
    static parse(data: unknown): TeamNotification;
}

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
declare class InitializeTeams {
    readonly teams: TeamData[];
    static readonly PACKET_ID = "id";
    static readonly PACKET_NAME = "InitializeTeams";
    readonly PACKET_NAME = "InitializeTeams";
    constructor(teams: TeamData[]);
    static parse(data: unknown): InitializeTeams;
}

/**
 * @packet-id "18"
 * @description **SpawnProjectile** is a signal that shows a projectile has been made.
 * @member `range` shows how far the projectile can go.
 * @member `speed` shows how fast the projectile moves.
 * @member `direction` shows the direction the projectile is going (in radians).
 * @member `originX` shows where the projectile starts on the x-axis.
 * @member `originY` shows where the projectile starts on the y-axis.
 * @member `fireDate` shows the time when the projectile was fired (in milliseconds).
 * @member `layer` shows the level the projectile is on (it won't be stopped by objects that is on lower levels).
 * @member `type` shows the type of projectile. that can be used to get projectile meta data.
 * @member `projectileID` unique identifier for the projectile.
 */
declare class SpawnProjectile {
    readonly range: number;
    readonly speed: number;
    readonly layer: number;
    readonly type: number;
    readonly direction: number;
    readonly projectileID: number;
    readonly originX: number;
    readonly originY: number;
    readonly fireDate: number;
    static readonly PACKET_ID = "18";
    static readonly PACKET_NAME = "SpawnProjectile";
    readonly PACKET_NAME = "SpawnProjectile";
    constructor(range: number, speed: number, layer: number, type: number, direction: number, projectileID: number, originX: number, originY: number, fireDate: number);
    static parse(data: unknown): SpawnProjectile;
}

/**
 * @packet-id "us"
 * @description **UpdateItemStore** signal is used to handle the process of paying for and equipping items in the store.
 *
 * @member `method` Indicates whether the action is a "Purchased" or "Equipped".
 * @member `type` Specifies the type of item being updated, either "Accessory" or "Hat".
 * @member `itemID` A unique code that identifies the specific item that has been changed.
 */
declare class UpdateItemStore {
    readonly method: "Purchased" | "Equipped";
    readonly type: "Accessory" | "Hat";
    readonly itemID: number;
    static readonly PACKET_ID = "us";
    static readonly PACKET_NAME = "UpdateItemStore";
    readonly PACKET_NAME = "UpdateItemStore";
    constructor(method: "Purchased" | "Equipped", type: "Accessory" | "Hat", itemID: number);
    static parse(data: unknown): UpdateItemStore;
}

/**
 * @packet-id "14"
 * @description **UpdateItemUsage** is used to update the **item usage**.
 * @member `itemID` serves as a unique identifier for placable items such as traps, spikes, and windmills.
 * @member `count` indicates the number of instances your player has placed for that particular item.
 */
declare class UpdateItemUsage {
    readonly itemID: number;
    readonly count: number;
    static readonly PACKET_ID = "14";
    static readonly PACKET_NAME = "UpdateItemUsage";
    readonly PACKET_NAME = "UpdateItemUsage";
    constructor(itemID: number, count: number);
    static parse(data: unknown): UpdateItemUsage;
}

/**
 * @packet-id "1"
 * @description **InitializeGame** is a signal carries your player id.
 * @member `MyPlayerID` is the unique identifier for your player.
 */
declare class InitializeGame {
    readonly MyPlayerID: number;
    static readonly PACKET_ID = "1";
    static readonly PACKET_NAME = "InitializeGame";
    readonly PACKET_NAME = "InitializeGame";
    constructor(MyPlayerID: number);
    static parse(data: unknown): InitializeGame;
}

/**
 * @packet-id "20"
 * @description  **ShutdownNotice** is a message for your player that tells you the server is going to shut down.
 * @param `minutes` indicates the number of minutes left before the shutdown.
 * @param `seconds` indicates the number of seconds left before the shutdown.
 */
declare class ShutdownNotice {
    readonly minutes: number;
    readonly seconds: number;
    static readonly PACKET_ID = "20";
    static readonly PACKET_NAME = "ShutdownNotice";
    readonly PACKET_NAME = "ShutdownNotice";
    constructor(minutes: number, seconds: number);
    static parse(data: unknown): ShutdownNotice;
}

/**
 * @packet-id "15"
 * @description **UpdateProgress** is a message that informs the player about their progress.
 * @member `currentAge?` refers to the player's current age.
 * @member `currentXP` refers to the player's current experience points (xp).
 * @member `progress?` indicates the player's progress as a percentage.
 * @member `maxXP?` represents the maximum amount of experience points required for the player to advance to the next age.
 */
declare class UpdateProgress {
    readonly currentAge: number | undefined;
    readonly currentXP: number;
    readonly maxXP: number | undefined;
    static readonly PACKET_ID = "15";
    static readonly PACKET_NAME = "UpdateProgress";
    readonly PACKET_NAME = "UpdateProgress";
    constructor(currentAge: number | undefined, currentXP: number, maxXP: number | undefined);
    static parse(data: unknown): UpdateProgress;
}

type resourceType = z.infer<typeof resourceTypeSchema>;
declare const resourceTypeSchema: z.ZodUnion<[z.ZodLiteral<"wood">, z.ZodLiteral<"food">, z.ZodLiteral<"stone">, z.ZodLiteral<"points">, z.ZodLiteral<"kills">]>;
/**
 * @packet-id "9"
 * @description **UpdateResource** is a signal contains information about a new resource value.
 * @member `resourceType` indicates the type of resource being updated, such as food, wood, etc.
 * @member `resourceValue` represents the new value of that resource.
 */
declare class UpdateResource {
    readonly resourceType: resourceType;
    readonly resourceValue: number;
    static readonly PACKET_ID = "9";
    static readonly PACKET_NAME = "UpdateResource";
    readonly PACKET_NAME = "UpdateResource";
    constructor(resourceType: resourceType, resourceValue: number);
    static parse(data: unknown): UpdateResource;
}

/**
 * @packet-id "16"
 * @description **UpdateUpgrades** provides information to the player about their upgrade abilities.
 *
 * @member {number} upgradeLevel - The upgrade level that the player can reach.
 * @member {number} currentUpgradeLevel - The current upgrade level of the player.
 *
 * @depth upgradeLevel is how many upgrades your player can do
 */
declare class UpdateUpgrades {
    readonly upgradeLevel: number;
    readonly currentUpgradeLevel: number;
    static readonly PACKET_ID = "16";
    static readonly PACKET_NAME = "UpdateUpgrades";
    readonly PACKET_NAME = "UpdateUpgrades";
    constructor(upgradeLevel: number, currentUpgradeLevel: number);
    static parse(data: unknown): UpdateUpgrades;
}

/**

 * @packet-id "aa"
 * @description The purpose of **AnimateGameAI** is to let you know how to animate a GameAI (usually used for Mustafa's attack).
 * @member `gameAIID` is a unique identifier for the gameAI.
 */
declare class AnimateGameAI {
    readonly gameAIID: number;
    static readonly PACKET_ID = "aa";
    static readonly PACKET_NAME = "AnimateGameAI";
    readonly PACKET_NAME = "AnimateGameAI";
    constructor(gameAIID: number);
    static parse(data: unknown): AnimateGameAI;
}

/**
 * @packet-id "13"
 * @description **RemoveObjects** tells the player which objects to clean
 * @member `ownerID` is a special code that identifies the player who owns the objects.
 * This is helpful for removing many objects at the same time.
 */
declare class RemoveObjects {
    readonly ownerID: number;
    static readonly PACKET_ID = "13";
    static readonly PACKET_NAME = "RemoveObjects";
    readonly PACKET_NAME = "RemoveObjects";
    constructor(ownerID: number);
    static parse(data: unknown): RemoveObjects;
}

/**
 * @member `x` represents the point's position on the x-axis.
 * @member `y` represents the point's position on the y-axis.
 */
interface Point2D {
    readonly x: number;
    readonly y: number;
}
/**
 * @packet-id "mm"
 * @description **UpdateMiniMap** is a packet that holds information about the current status of mini map in the game.
 * @member `points` is a list of Point2D (each point is teammate position)
 *
 * @member `Point2D.x` represents the point's position on the x-axis.
 * @member `Point2D.y` represents the point's position on the y-axis.
 */
declare class UpdateMiniMap {
    readonly points: Point2D[];
    static readonly PACKET_ID = "mm";
    static readonly PACKET_NAME = "UpdateMiniMap";
    readonly PACKET_NAME = "UpdateMiniMap";
    constructor(points: Point2D[]);
    static parse(data: unknown): UpdateMiniMap;
}

/**
 * @packet-id "8"
 * @description **ObjectStrike** is a signal that indicates when a player has successfully hit an gameObject.
 * @member `forceDirection` specifies the direction in which the object is moved.
 * @member `objectID` is a unique identifier for the object who got hit.
 */
declare class ObjectStrike {
    readonly forceDirection: number;
    readonly objectID: number;
    static readonly PACKET_ID = "8";
    static readonly PACKET_NAME = "ObjectStrike";
    readonly PACKET_NAME = "ObjectStrike";
    constructor(forceDirection: number, objectID: number);
    static parse(data: unknown): ObjectStrike;
}

/**
 * @packet-id "12"
 * @description **RemoveObject** instructs which object need to be removed. This usually means that the object has been **destroyed**.
 * @member `objectID` is a special number that helps identify the object that needs to be removed.
 */
declare class RemoveObject {
    readonly objectID: number;
    static readonly PACKET_ID = "12";
    static readonly PACKET_NAME = "RemoveObject";
    readonly PACKET_NAME = "RemoveObject";
    constructor(objectID: number);
    static parse(data: unknown): RemoveObject;
}

/**
 * @member `uniqueName` If the AI is a cow or pig, this field will contain the name of the cow or pig.
 * Otherwise, it will be `null`.
 * @member `health` This field indicates the current health of the AI..
 * @member `type` specifies the type of AI, which is used to fetch his meta data.
 * @member `rotation` indicates the rotation value of the AI.
 * @member `id` serves as a unique identifier for the AI.
 * @member `x` represents the player's position on the x-axis.
 * @member `y` represents the player's position on the y-axis.
 */
interface GameAIData {
    readonly uniqueName: string | null;
    readonly health: number;
    readonly type: number;
    readonly rotation: number;
    readonly id: number;
    readonly x: number;
    readonly y: number;
}
/**
 * @packet-id "a"
 * @description **UpdateGameAI** is a packet that holds information about the current status of gameAI in the game.
 * @member `data` a list of PlayerData
 *
 * @member `GameAIData.uniqueName` If the AI is a cow or pig, this field will contain the name of the cow or pig.
 * Otherwise, it will be `null`.
 * @member `GameAIData.health` This field indicates the current health of the AI..
 * @member `GameAIData.type` specifies the type of AI, which is used to fetch his meta data.
 * @member `GameAIData.rotation` indicates the rotation value of the AI.
 * @member `GameAIData.id` serves as a unique identifier for the AI.
 * @member `GameAIData.x` represents the player's position on the x-axis.
 * @member `GameAIData.y` represents the player's position on the y-axis.
 */
declare class UpdateGameAI {
    readonly data: GameAIData[];
    static readonly PACKET_ID = "a";
    static readonly PACKET_NAME = "UpdateGameAI";
    readonly PACKET_NAME = "UpdateGameAI";
    constructor(data: GameAIData[]);
    static parse(data: unknown): UpdateGameAI;
}

/**
 * @packet-id "h"
 * @description **UpdateHealth** is a signal that contains information about a player's new health.
 * @member `playerID` is a special code that identifies the player whose health has changed.
 * @member `playerHealth` represents the player's updated health value.
 */
declare class UpdateHealth {
    readonly playerID: number;
    readonly playerHealth: number;
    static readonly PACKET_ID = "h";
    static readonly PACKET_NAME = "UpdateHealth";
    readonly PACKET_NAME = "UpdateHealth";
    constructor(playerID: number, playerHealth: number);
    static parse(data: unknown): UpdateHealth;
}

/**
 * @packet-id "ch"
 * @description **ReceiveChat** is a signal that is received when someone nearby sends a message in the game.
 * @member `ownerID` is a special ID that identifies the player who sends the message.
 * @member `message` contains the content of the message.
 */
declare class ReceiveChat {
    readonly ownerID: number;
    readonly message: string;
    static readonly PACKET_ID = "ch";
    static readonly PACKET_NAME = "ReceiveChat";
    readonly PACKET_NAME = "ReceiveChat";
    constructor(ownerID: number, message: string);
    static parse(data: unknown): ReceiveChat;
}

/**
 * @packet-id "sp"
 * @description **TurretShoot** is a signal that is received when a nearby turret shoots.
 * @member `turretID` is a unique identifier for the turret that shot.
 * @member `angle` indicates the current angle the turret is facing (in radian).
 */
declare class TurretShoot {
    readonly turretID: number;
    readonly angle: number;
    static readonly PACKET_ID = "sp";
    static readonly PACKET_NAME = "TurretShoot";
    readonly PACKET_NAME = "TurretShoot";
    constructor(turretID: number, angle: number);
    static parse(data: unknown): TurretShoot;
}

/**
 * @packet-id "17"
 * @description The **UpdateItems** class represents a signal that provides information about a player's kit.
 * @member `kit` - An array of item IDs.
 * @member `isWeapon` - Indicates whether the kit belongs to weapons category or items category.
 */
declare class UpdateItems {
    readonly kit: number[];
    readonly isWeapon: boolean;
    static readonly PACKET_ID = "17";
    static readonly PACKET_NAME = "UpdateItems";
    readonly PACKET_NAME = "UpdateItems";
    constructor(kit: number[], isWeapon: boolean);
    static parse(data: unknown): UpdateItems;
}

/**
 * @packet-id "ac"
 * @description **CreateTeam** is a signal that indicates when a player creates a team.
 * @member `ownerID` is a unique identifier for the player who created and owns the team.
 * @member `title` is the title of the team.
 */
declare class CreateTeam {
    readonly ownerID: number;
    readonly title: string;
    static readonly PACKET_ID = "ac";
    static readonly PACKET_NAME = "CreateTeam";
    readonly PACKET_NAME = "CreateTeam";
    constructor(ownerID: number, title: string);
    static parse(data: unknown): CreateTeam;
}

/**
 * @packet-id "ad"
 * @description **DeleteTeam** is a signal that indicates when a team is been deleted or destroyed.
 * @member `title` is the title of the team.
 */
declare class DeleteTeam {
    readonly title: string;
    static readonly PACKET_ID = "ad";
    static readonly PACKET_NAME = "DeleteTeam";
    readonly PACKET_NAME = "DeleteTeam";
    constructor(title: string);
    static parse(data: unknown): DeleteTeam;
}

/**
 * @packet-id "d"
 * @description  **Disconnect** is a signal for your player, indicating that the connection is lost (disconnected)
 */
declare class Disconnect {
    static readonly PACKET_ID = "d";
    static readonly PACKET_NAME = "Disconnect";
    readonly PACKET_NAME = "Disconnect";
    static parse(_data: unknown): Disconnect;
}

/**
 * @packet-id "p"
 * @description **TeamSignal** is a signal that is broadcasted to all the team members.
 * This signal is usually used for asking for `help` and it only appears on the **mini map**.
 * @member `x` represents the position of the signal on the x-axis.
 * @member `y` represents the position of the signal on the y-axis.
 */
declare class TeamSignal {
    readonly x: number;
    readonly y: number;
    static readonly PACKET_ID = "p";
    static readonly PACKET_NAME = "TeamSignal";
    readonly PACKET_NAME = "TeamSignal";
    constructor(x: number, y: number);
    static parse(data: unknown): TeamSignal;
}

/**
 * @packet-id "t"
 * @description **ShowText** is a signal that is received when a player needs to display text on the screen.
 * This signal is typically used for showing healing or damage text.
 * @member `type` specifies the type of text, which can be either "Healing" or "Damage".
 * @member `content` contains the actual text content.
 * @member `x` indicates the position of the text along the x-axis.
 * @member `y` indicates the position of the text along the y-axis.
 */
declare class ShowText {
    readonly type: "Healing" | "Damage";
    readonly content: string;
    readonly x: number;
    readonly y: number;
    static readonly PACKET_ID = "t";
    static readonly PACKET_NAME = "ShowText";
    readonly PACKET_NAME = "ShowText";
    constructor(type: "Healing" | "Damage", content: string, x: number, y: number);
    static parse(data: unknown): ShowText;
}

/**
 * @packet-id "*"
 * @description **Unknown** is a signal for a raw packet that hasn't been `processed` or `dealt` with __correctly__.
 * @member `content` is just the raw structure of that packet.
 */
declare class Unknown {
    readonly content: unknown;
    static readonly PACKET_ID = "*";
    static readonly PACKET_NAME = "Unknown";
    readonly PACKET_NAME = "Unknown";
    constructor(content: unknown);
    static parse(data: unknown): Unknown;
}

/**
 * @packet-id "io-init"
 * @description The purpose of **IOInit** is inform the player about their `initID`,
 * @member `initID` serves as a unique identifier for the player.
 */
declare class IOInit {
    readonly initID: string;
    static readonly PACKET_ID = "io-init";
    static readonly PACKET_NAME = "IOInit";
    readonly PACKET_NAME = "IOInit";
    constructor(initID: string);
    static parse(data: unknown): IOInit;
}

/**
 * @packet-id "7"
 * @description **Punch** is a signal that shows when a player begins to hit
 * (they may or may not actually hit anyone).
 * @member `weaponType` The type of weapon the player has, which can be used to obtain weapon meta data.
 * @member `ownerID` serves as a unique identifier for the player who did the punch.
 * @member `didHit` tells if the player successfully hit something
 * @member `data` the meta data of the weapon
 */
declare class Punch {
    readonly ownerID: number;
    readonly didHit: boolean;
    readonly weaponType: number;
    static readonly PACKET_ID = "7";
    static readonly PACKET_NAME = "Punch";
    readonly PACKET_NAME = "Punch";
    constructor(ownerID: number, didHit: boolean, weaponType: number);
    static parse(data: unknown): Punch;
}

/**
 * @packet-id "11"
 * @description  **Death** is a signal for your player, indicating that they have died.
 */
declare class Death {
    static readonly PACKET_ID = "11";
    static readonly PACKET_NAME = "Death";
    readonly PACKET_NAME = "Death";
    static parse(_data: unknown): Death;
}

/**
 * @packet-id "pp"
 * @description  **Pong** is used to measure the ping.
 */
declare class Pong {
    static readonly PACKET_ID = "pp";
    static readonly PACKET_NAME = "Pong";
    readonly PACKET_NAME = "Pong";
    static parse(_data: unknown): Pong;
}

type ServerPacket = ReturnType<typeof decode>;
declare function decode(raw: ArrayBuffer | Uint8Array | number[]): InitializePlayer | UpdatePlayers | SetObjectsData | UpdateTeamMembersList | UpdateLeaderBoard | PlayerDisconnect | TeamNotification | InitializeTeams | SpawnProjectile | UpdateItemStore | UpdateItemUsage | InitializeGame | ShutdownNotice | UpdateProgress | UpdateResource | UpdateUpgrades | AnimateGameAI | RemoveObjects | UpdateMiniMap | ObjectStrike | RemoveObject | UpdateGameAI | UpdateHealth | ReceiveChat | TurretShoot | UpdateItems | CreateTeam | DeleteTeam | Disconnect | TeamSignal | ShowText | Unknown | IOInit | Punch | Death | Pong;

interface MooMooIOConnectionEvents {
    close: {
        reason: string;
        code: number;
    };
    error: null;
    open: null;
    message: ReturnType<typeof decode>;
    rawMessage: Uint8Array;
    deepSend: {
        data: Uint8Array;
        isTrusted: boolean;
    };
    send: Uint8Array;
}
declare class MooMooIOConnection extends UnifyEmitter<MooMooIOConnectionEvents> {
    #private;
    protected antiKick: AntiKick;
    connect(ip: string, token: string): void;
    disconnect(): void;
    destroy(): void;
    /**
     * Sends the specified data through the socket connection.
     * @param data - The data to be sent as a Uint8Array.
     * @returns A boolean value indicating if the request has been successfully sent.
     */
    send(data: Uint8Array): boolean;
    use(socket: WebSocket): void;
    set socket(socket: WebSocket);
    isOPEN(): boolean | null;
}

type Packet = readonly [string, unknown];
declare class ClientPacketOrganizer {
    #private;
    readonly connection: MooMooIOConnection;
    constructor(connection: MooMooIOConnection);
    destroy(): void;
    /**
     * Generator function that reads and yields items from the request stack.
     * @returns An iterator for the items in the request stack.
     */
    protected readRequestStack(): Generator<Packet, void, unknown>;
    /**
     * Pushes a new request to the request stack.
     * @param {Packet} input - The request to be added to the stack.
     */
    protected requestStackPush(input: Packet): void;
    protected parse(packet: Packet): Promise<boolean>;
    parseLast(): Promise<boolean>;
    parseRequestStack(): Promise<void>;
    /**
     *
     * @description This packet is used to respond to a join request you received as the team owner. You can either `Accept` or `Deny` the request.
     * @ignored If you don't own the team, this packet will be ignored.
     * @param answer Either `Accept` or `Deny`.
     *
     * @note The response is based on the order in which the requests were received, with the oldest request being answered first.
     */
    answerJoinRequest(answer: "Accept" | "Deny"): this;
    /**
     * @description This packet is used to purchase/buy an `Accessory` or `Hat` in the game.
     * @ignored if you already own the item or if you don't have enough gold to make the purchase. The packet will be ignored.
     * @param itemID is the unique number that identifies the item (ID).
     * @param itemType can be either `Accessory` or `Hat`.
     * @note If you haven't spawned in the game yet, this packet will be ignored
     */
    buy(itemID: number, itemType: "Accessory" | "Hat"): this;
    /**
     *
     * @description this packet is used to create a team in the game.
     * @ignored If you are already in a team or if the title you provide is already being used by another team. this packet will be ignored
     * @param teamTitle unique title for the team.
     *
     * @note you can have one team at the same time.
     */
    createTeam(teamTitle: string): this;
    /**
     * @description This packet is used to **equip** an `Accessory` or `Hat` in the game.
     * @ignored if you don't have that item yet. the packet will be ignored.
     * @param itemID is the identification number for that item (ID).
     * @param itemType can be either `Accessory` or `Hat`.
     * @note If you haven't spawned in the game yet, this packet will be ignored.
     */
    equip(itemID: number, itemType: "Accessory" | "Hat"): this;
    /**
     * @description This packet is used to change the item held by your player.
     * @param itemID A unique code that identifies the item.
     * @param isWeapon A method to categorize the type of item.
     */
    holdItem(itemID: number, isWeapon: boolean): this;
    /**
     *
     * @description This packet is used to ask to join a team in the game.
     * @ignored If you are already in a team, this packet will be ignored.
     * @param teamTitle The name of the team you want to join.
     * @note If the team cannot be found, this packet will be ignored.
     */
    joinRequest(teamTitle: string): this;
    /**
     *
     * @description This packet is for removing someone from your team
     * @ignored If you are not the team owner. this packet will be ignored
     * @param playerID The ID of the player you want to kick from your team.
     */
    kickFromTeam(playerID: number): this;
    /**
     *
     * @description this packet is used to **leave your current team.
     * @ignored If you are not in a team. this packet will be ignored.
     */
    leaveTeam(): this;
    /**
     * @description this packet is used to ping the game
     * @param target either `MiniMap` or `Connection`
     * @note
     * > if the `target` is `MiniMap` then the server gonna responses with `UpdateMiniMap`.......
     * > if the `target` is `Connection` then the server gonna responses with `Pong`
     */
    ping(target: "MiniMap" | "Connection"): this;
    /**
     * @description this packet is used to update your character direction in the game.
     * @param direction the direction your character is facing (in radian)
     *
     * @note this direction may be overwritten by `setPunchState`
     */
    setDirection(direction: number): this;
    /**
     * @description This packet is used to update your punch status in the game.
     * @param state is an indicator of whether your player should start punching or not.
     * @param direction is the direction the player should face before updating the status (in radian).
     * @depth I think I need to explain this further.
     * The `state` refers to whether your player is currently punching or not.
     * You can make your player perform an punch by following these steps:
     * > First, enable the punch by setting the `state` parameter to `true`.
     * > Second, disable the punch by setting the `state` parameter to `false`.
     */
    setPunchState(state: boolean, direction: number): this;
    /**
     * @description This packet is used to create your character in the game.
     * @param name The name of your character.
     * @param skinID The skin ID of your character.
     * @param haveStartPackage Determines whether your character should start with a fast start-up package (having 100 resources for each resource).
     */
    spawn(name: string, skinID: number, haveStartPackage?: boolean): this;
    /**
     * @description this packet is used to toggle auto-punch
     * @notSafe true
     */
    toggleAutoPunchState(): this;
    /**
     * @description This packet is used to toggle the lock of your player facing direction.
     * @note Not recommended to use. avoid use this as much as possible
     */
    toggleLockDir(): this;
    /**
     * @description This packet is used to upgrade your chosen items in the game.
     * @param itemID A special code that identify the item.
     * @note If you do not meet the necessary conditions for the upgrade, this packet will be ignored.
     */
    upgrade(itemID: number): this;
}

declare const _default$2: Readonly<{
    readonly id: 12;
    readonly name: "Snowball";
    readonly price: 1000;
    readonly scale: 105;
    readonly xOff: 18;
    readonly desc: "no effect";
} | {
    readonly id: 9;
    readonly name: "Tree Cape";
    readonly price: 1000;
    readonly scale: 90;
    readonly desc: "no effect";
} | {
    readonly id: 10;
    readonly name: "Stone Cape";
    readonly price: 1000;
    readonly scale: 90;
    readonly desc: "no effect";
} | {
    readonly id: 3;
    readonly name: "Cookie Cape";
    readonly price: 1500;
    readonly scale: 90;
    readonly desc: "no effect";
} | {
    readonly id: 8;
    readonly name: "Cow Cape";
    readonly price: 2000;
    readonly scale: 90;
    readonly desc: "no effect";
} | {
    readonly id: 11;
    readonly name: "Monkey Tail";
    readonly price: 2000;
    readonly scale: 97;
    readonly xOff: 25;
    readonly desc: "Super speed but reduced damage";
    readonly spdMult: 1.35;
    readonly dmgMultO: 0.2;
} | {
    readonly id: 17;
    readonly name: "Apple Basket";
    readonly price: 3000;
    readonly scale: 80;
    readonly xOff: 12;
    readonly desc: "slowly regenerates health over time";
    readonly healthRegen: 1;
} | {
    readonly id: 6;
    readonly name: "Winter Cape";
    readonly price: 3000;
    readonly scale: 90;
    readonly desc: "no effect";
} | {
    readonly id: 4;
    readonly name: "Skull Cape";
    readonly price: 4000;
    readonly scale: 90;
    readonly desc: "no effect";
} | {
    readonly id: 5;
    readonly name: "Dash Cape";
    readonly price: 5000;
    readonly scale: 90;
    readonly desc: "no effect";
} | {
    readonly id: 2;
    readonly name: "Dragon Cape";
    readonly price: 6000;
    readonly scale: 90;
    readonly desc: "no effect";
} | {
    readonly id: 1;
    readonly name: "Super Cape";
    readonly price: 8000;
    readonly scale: 90;
    readonly desc: "no effect";
} | {
    readonly id: 7;
    readonly name: "Troll Cape";
    readonly price: 8000;
    readonly scale: 90;
    readonly desc: "no effect";
} | {
    readonly id: 14;
    readonly name: "Thorns";
    readonly price: 10000;
    readonly scale: 115;
    readonly xOff: 20;
    readonly desc: "no effect";
} | {
    readonly id: 15;
    readonly name: "Blockades";
    readonly price: 10000;
    readonly scale: 95;
    readonly xOff: 15;
    readonly desc: "no effect";
} | {
    readonly id: 20;
    readonly name: "Devils Tail";
    readonly price: 10000;
    readonly scale: 95;
    readonly xOff: 20;
    readonly desc: "no effect";
} | {
    readonly id: 16;
    readonly name: "Sawblade";
    readonly price: 12000;
    readonly scale: 90;
    readonly spin: true;
    readonly xOff: 0;
    readonly desc: "deal damage to players that damage you";
    readonly dmg: 0.15;
} | {
    readonly id: 13;
    readonly name: "Angel Wings";
    readonly price: 15000;
    readonly scale: 138;
    readonly xOff: 22;
    readonly desc: "slowly regenerates health over time";
    readonly healthRegen: 3;
} | {
    readonly id: 19;
    readonly name: "Shadow Wings";
    readonly price: 15000;
    readonly scale: 138;
    readonly xOff: 22;
    readonly desc: "increased movement speed";
    readonly spdMult: 1.1;
} | {
    readonly id: 18;
    readonly name: "Blood Wings";
    readonly price: 20000;
    readonly scale: 178;
    readonly xOff: 26;
    readonly desc: "restores health when you deal damage";
    readonly healD: 0.2;
} | {
    readonly id: 21;
    readonly name: "Corrupt X Wings";
    readonly price: 20000;
    readonly scale: 178;
    readonly xOff: 26;
    readonly desc: "deal damage to players that damage you";
    readonly dmg: 0.25;
}>[];

declare const _default$1: Readonly<{
    readonly id: 0;
    readonly type: 0;
    readonly age: -1;
    readonly name: "tool hammer";
    readonly desc: "tool for gathering all resources";
    readonly src: "hammer_1";
    readonly length: 140;
    readonly width: 140;
    readonly xOff: -3;
    readonly yOff: 18;
    readonly dmg: 25;
    readonly range: 65;
    readonly gather: 1;
    readonly speed: 300;
} | {
    readonly id: 1;
    readonly type: 0;
    readonly age: 2;
    readonly name: "hand axe";
    readonly desc: "gathers resources at a higher rate";
    readonly src: "axe_1";
    readonly length: 140;
    readonly width: 140;
    readonly xOff: 3;
    readonly yOff: 24;
    readonly dmg: 30;
    readonly spdMulti: 1;
    readonly range: 70;
    readonly gather: 2;
    readonly speed: 400;
} | {
    readonly id: 2;
    readonly type: 0;
    readonly age: 8;
    readonly pre: 1;
    readonly name: "great axe";
    readonly desc: "deal more damage and gather more resources";
    readonly src: "great_axe_1";
    readonly length: 140;
    readonly width: 140;
    readonly xOff: -8;
    readonly yOff: 25;
    readonly dmg: 35;
    readonly spdMulti: 1;
    readonly range: 75;
    readonly gather: 4;
    readonly speed: 400;
} | {
    readonly id: 3;
    readonly type: 0;
    readonly age: 2;
    readonly name: "short sword";
    readonly desc: "increased attack power but slower move speed";
    readonly src: "sword_1";
    readonly iPad: 1.3;
    readonly length: 130;
    readonly width: 210;
    readonly xOff: -8;
    readonly yOff: 46;
    readonly dmg: 35;
    readonly spdMulti: 0.85;
    readonly range: 110;
    readonly gather: 1;
    readonly speed: 300;
} | {
    readonly id: 4;
    readonly type: 0;
    readonly age: 8;
    readonly pre: 3;
    readonly name: "katana";
    readonly desc: "greater range and damage";
    readonly src: "samurai_1";
    readonly iPad: 1.3;
    readonly length: 130;
    readonly width: 210;
    readonly xOff: -8;
    readonly yOff: 59;
    readonly dmg: 40;
    readonly spdMulti: 0.8;
    readonly range: 118;
    readonly gather: 1;
    readonly speed: 300;
} | {
    readonly id: 5;
    readonly type: 0;
    readonly age: 2;
    readonly name: "polearm";
    readonly desc: "long range melee weapon";
    readonly src: "spear_1";
    readonly iPad: 1.3;
    readonly length: 130;
    readonly width: 210;
    readonly xOff: -8;
    readonly yOff: 53;
    readonly dmg: 45;
    readonly knock: 0.2;
    readonly spdMulti: 0.82;
    readonly range: 142;
    readonly gather: 1;
    readonly speed: 700;
} | {
    readonly id: 6;
    readonly type: 0;
    readonly age: 2;
    readonly name: "bat";
    readonly desc: "fast long range melee weapon";
    readonly src: "bat_1";
    readonly iPad: 1.3;
    readonly length: 110;
    readonly width: 180;
    readonly xOff: -8;
    readonly yOff: 53;
    readonly dmg: 20;
    readonly knock: 0.7;
    readonly range: 110;
    readonly gather: 1;
    readonly speed: 300;
} | {
    readonly id: 7;
    readonly type: 0;
    readonly age: 2;
    readonly name: "daggers";
    readonly desc: "really fast short range weapon";
    readonly src: "dagger_1";
    readonly iPad: 0.8;
    readonly length: 110;
    readonly width: 110;
    readonly xOff: 18;
    readonly yOff: 0;
    readonly dmg: 20;
    readonly knock: 0.1;
    readonly range: 65;
    readonly gather: 1;
    readonly hitSlow: 0.1;
    readonly spdMulti: 1.13;
    readonly speed: 100;
} | {
    readonly id: 8;
    readonly type: 0;
    readonly age: 2;
    readonly name: "stick";
    readonly desc: "great for gathering but very weak";
    readonly src: "stick_1";
    readonly length: 140;
    readonly width: 140;
    readonly xOff: 3;
    readonly yOff: 24;
    readonly dmg: 1;
    readonly spdMulti: 1;
    readonly range: 70;
    readonly gather: 7;
    readonly speed: 400;
} | {
    readonly id: 9;
    readonly type: 1;
    readonly age: 6;
    readonly name: "hunting bow";
    readonly desc: "bow used for ranged combat and hunting";
    readonly src: "bow_1";
    readonly req: readonly ["wood", 4];
    readonly length: 120;
    readonly width: 120;
    readonly xOff: -6;
    readonly yOff: 0;
    readonly projectile: 0;
    readonly spdMulti: 0.75;
    readonly speed: 600;
} | {
    readonly id: 10;
    readonly type: 1;
    readonly age: 6;
    readonly name: "great hammer";
    readonly desc: "hammer used for destroying structures";
    readonly src: "great_hammer_1";
    readonly length: 140;
    readonly width: 140;
    readonly xOff: -9;
    readonly yOff: 25;
    readonly dmg: 10;
    readonly spdMulti: 0.88;
    readonly range: 75;
    readonly sDmg: 7.5;
    readonly gather: 1;
    readonly speed: 400;
} | {
    readonly id: 11;
    readonly type: 1;
    readonly age: 6;
    readonly name: "wooden shield";
    readonly desc: "blocks projectiles and reduces melee damage";
    readonly src: "shield_1";
    readonly length: 120;
    readonly width: 120;
    readonly shield: 0.2;
    readonly xOff: 6;
    readonly yOff: 0;
    readonly spdMulti: 0.7;
} | {
    readonly id: 12;
    readonly type: 1;
    readonly age: 8;
    readonly pre: 9;
    readonly name: "crossbow";
    readonly desc: "deals more damage and has greater range";
    readonly src: "crossbow_1";
    readonly req: readonly ["wood", 5];
    readonly aboveHand: true;
    readonly armS: 0.75;
    readonly length: 120;
    readonly width: 120;
    readonly xOff: -4;
    readonly yOff: 0;
    readonly projectile: 2;
    readonly spdMulti: 0.7;
    readonly speed: 700;
} | {
    readonly id: 13;
    readonly type: 1;
    readonly age: 9;
    readonly pre: 12;
    readonly name: "repeater crossbow";
    readonly desc: "high fire rate crossbow with reduced damage";
    readonly src: "crossbow_2";
    readonly req: readonly ["wood", 10];
    readonly aboveHand: true;
    readonly armS: 0.75;
    readonly length: 120;
    readonly width: 120;
    readonly xOff: -4;
    readonly yOff: 0;
    readonly projectile: 3;
    readonly spdMulti: 0.7;
    readonly speed: 230;
} | {
    readonly id: 14;
    readonly type: 1;
    readonly age: 6;
    readonly name: "mc grabby";
    readonly desc: "steals resources from enemies";
    readonly src: "grab_1";
    readonly length: 130;
    readonly width: 210;
    readonly xOff: -8;
    readonly yOff: 53;
    readonly dmg: 0;
    readonly steal: 250;
    readonly knock: 0.2;
    readonly spdMulti: 1.05;
    readonly range: 125;
    readonly gather: 0;
    readonly speed: 700;
} | {
    readonly id: 15;
    readonly type: 1;
    readonly age: 9;
    readonly pre: 12;
    readonly name: "musket";
    readonly desc: "slow fire rate but high damage and range";
    readonly src: "musket_1";
    readonly req: readonly ["stone", 10];
    readonly aboveHand: true;
    readonly rec: 0.35;
    readonly armS: 0.6;
    readonly hndS: 0.3;
    readonly hndD: 1.6;
    readonly length: 205;
    readonly width: 205;
    readonly xOff: 25;
    readonly yOff: 0;
    readonly projectile: 5;
    readonly hideProjectile: true;
    readonly spdMulti: 0.6;
    readonly speed: 1500;
}>[];

declare const _default: Readonly<{
    readonly id: 45;
    readonly name: "Shame!";
    readonly dontSell: true;
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "hacks are for losers";
} | {
    readonly id: 51;
    readonly name: "Moo Cap";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "coolest mooer around";
} | {
    readonly id: 50;
    readonly name: "Apple Cap";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "apple farms remembers";
} | {
    readonly id: 28;
    readonly name: "Moo Head";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 29;
    readonly name: "Pig Head";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 30;
    readonly name: "Fluff Head";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 36;
    readonly name: "Pandou Head";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 37;
    readonly name: "Bear Head";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 38;
    readonly name: "Monkey Head";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 44;
    readonly name: "Polar Head";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 35;
    readonly name: "Fez Hat";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 42;
    readonly name: "Enigma Hat";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "join the enigma army";
} | {
    readonly id: 43;
    readonly name: "Blitz Hat";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "hey everybody i'm blitz";
} | {
    readonly id: 49;
    readonly name: "Bob XIII Hat";
    readonly price: 0;
    readonly scale: 120;
    readonly desc: "like and subscribe";
} | {
    readonly id: 57;
    readonly name: "Pumpkin";
    readonly price: 50;
    readonly scale: 120;
    readonly desc: "Spooooky";
} | {
    readonly id: 8;
    readonly name: "Bummle Hat";
    readonly price: 100;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 2;
    readonly name: "Straw Hat";
    readonly price: 500;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 15;
    readonly name: "Winter Cap";
    readonly price: 600;
    readonly scale: 120;
    readonly desc: "allows you to move at normal speed in snow";
    readonly coldM: 1;
} | {
    readonly id: 5;
    readonly name: "Cowboy Hat";
    readonly price: 1000;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 4;
    readonly name: "Ranger Hat";
    readonly price: 2000;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 18;
    readonly name: "Explorer Hat";
    readonly price: 2000;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 31;
    readonly name: "Flipper Hat";
    readonly price: 2500;
    readonly scale: 120;
    readonly desc: "have more control while in water";
    readonly watrImm: true;
} | {
    readonly id: 1;
    readonly name: "Marksman Cap";
    readonly price: 3000;
    readonly scale: 120;
    readonly desc: "increases arrow speed and range";
    readonly aMlt: 1.3;
} | {
    readonly id: 10;
    readonly name: "Bush Gear";
    readonly price: 3000;
    readonly scale: 160;
    readonly desc: "allows you to disguise yourself as a bush";
} | {
    readonly id: 48;
    readonly name: "Halo";
    readonly price: 3000;
    readonly scale: 120;
    readonly desc: "no effect";
} | {
    readonly id: 6;
    readonly name: "Soldier Helmet";
    readonly price: 4000;
    readonly scale: 120;
    readonly desc: "reduces damage taken but slows movement";
    readonly spdMulti: 0.94;
    readonly dmgMulti: 0.75;
} | {
    readonly id: 23;
    readonly name: "Anti Venom Gear";
    readonly price: 4000;
    readonly scale: 120;
    readonly desc: "makes you immune to poison";
    readonly poisonRes: 1;
} | {
    readonly id: 13;
    readonly name: "Medic Gear";
    readonly price: 5000;
    readonly scale: 110;
    readonly desc: "slowly regenerates health over time";
    readonly healthRegen: 3;
} | {
    readonly id: 9;
    readonly name: "Miners Helmet";
    readonly price: 5000;
    readonly scale: 120;
    readonly desc: "earn 1 extra gold per resource";
    readonly extraGold: 1;
} | {
    readonly id: 32;
    readonly name: "Musketeer Hat";
    readonly price: 5000;
    readonly scale: 120;
    readonly desc: "reduces cost of projectiles";
    readonly projCost: 0.5;
} | {
    readonly id: 7;
    readonly name: "Bull Helmet";
    readonly price: 6000;
    readonly scale: 120;
    readonly desc: "increases damage done but drains health";
    readonly healthRegen: -5;
    readonly dmgMultiO: 1.5;
    readonly spdMulti: 0.96;
} | {
    readonly id: 22;
    readonly name: "Emp Helmet";
    readonly price: 6000;
    readonly scale: 120;
    readonly desc: "turrets won't attack but you move slower";
    readonly antiTurret: 1;
    readonly spdMulti: 0.7;
} | {
    readonly id: 12;
    readonly name: "Booster Hat";
    readonly price: 6000;
    readonly scale: 120;
    readonly desc: "increases your movement speed";
    readonly spdMulti: 1.16;
} | {
    readonly id: 26;
    readonly name: "Barbarian Armor";
    readonly price: 8000;
    readonly scale: 120;
    readonly desc: "knocks back enemies that attack you";
    readonly dmgK: 0.6;
} | {
    readonly id: 21;
    readonly name: "Plague Mask";
    readonly price: 10000;
    readonly scale: 120;
    readonly desc: "melee attacks deal poison damage";
    readonly poisonDmg: 5;
    readonly poisonTime: 6;
} | {
    readonly id: 46;
    readonly name: "Bull Mask";
    readonly price: 10000;
    readonly scale: 120;
    readonly desc: "bulls won't target you unless you attack them";
    readonly bullRepel: 1;
} | {
    readonly id: 14;
    readonly name: "Windmill Hat";
    readonly topSprite: true;
    readonly price: 10000;
    readonly scale: 120;
    readonly desc: "generates points while worn";
    readonly pps: 1.5;
} | {
    readonly id: 11;
    readonly name: "Spike Gear";
    readonly topSprite: true;
    readonly price: 10000;
    readonly scale: 120;
    readonly desc: "deal damage to players that damage you";
    readonly dmg: 0.45;
} | {
    readonly id: 53;
    readonly name: "Turret Gear";
    readonly topSprite: true;
    readonly price: 10000;
    readonly scale: 120;
    readonly desc: "you become a walking turret";
    readonly turret: {
        readonly proj: 1;
        readonly range: 700;
        readonly rate: 2500;
    };
    readonly spdMulti: 0.7;
} | {
    readonly id: 20;
    readonly name: "Samurai Armor";
    readonly price: 12000;
    readonly scale: 120;
    readonly desc: "increased attack speed and fire rate";
    readonly atkSpd: 0.78;
} | {
    readonly id: 58;
    readonly name: "Dark Knight";
    readonly price: 12000;
    readonly scale: 120;
    readonly desc: "restores health when you deal damage";
    readonly healD: 0.4;
} | {
    readonly id: 27;
    readonly name: "Scavenger Gear";
    readonly price: 15000;
    readonly scale: 120;
    readonly desc: "earn double points for each kill";
    readonly kScrM: 2;
} | {
    readonly id: 40;
    readonly name: "Tank Gear";
    readonly price: 15000;
    readonly scale: 120;
    readonly desc: "increased damage to buildings but slower movement";
    readonly spdMulti: 0.3;
    readonly bDmg: 3.3;
} | {
    readonly id: 52;
    readonly name: "Thief Gear";
    readonly price: 15000;
    readonly scale: 120;
    readonly desc: "steal half of a players gold when you kill them";
    readonly goldSteal: 0.5;
} | {
    readonly id: 55;
    readonly name: "Bloodthirstier";
    readonly price: 20000;
    readonly scale: 120;
    readonly desc: "Restore Health when dealing damage. And increased damage";
    readonly healD: 0.25;
    readonly dmgMultiO: 1.2;
} | {
    readonly id: 56;
    readonly name: "Assassin Gear";
    readonly price: 20000;
    readonly scale: 120;
    readonly desc: "Go invisible when not moving. Can't eat. Increased speed";
    readonly noEat: true;
    readonly spdMulti: 1.1;
    readonly invisTimer: 1000;
}>[];

type AccessoryName = (typeof _default$2)["0"]["name"];
type HatName = (typeof _default)["0"]["name"];
type GameItemName = (typeof _default$3)["0"]["name"];
type WeaponName = (typeof _default$1)["0"]["name"];
type MyPlayerEvents = EventsObject<PlayerEvents, {
    spawn: ThisType<MyPlayer>;
    death: ThisType<MyPlayer>;
    init: IOInit;
    pong: Pong;
    teamSignal: {
        /**
         * signal's position on y-axis
         */
        y: number;
        /**
         * signal's position on x-axis
         */
        x: number;
    };
    teamNotification: {
        /**
         * refers to the name of the player who asked to join
         */
        playerName: string;
        /**
         * a unique identifier for the player who asked to join
         */
        playerID: number;
    };
}>;
declare class MyPlayer extends Player<MyPlayerEvents> {
    #private;
    readonly connection: MooMooIOConnection;
    protected clientPacketOrganizer: ClientPacketOrganizer;
    protected state: {
        autoPunchState: boolean;
        alive: boolean;
        ping: {
            Connection: number;
            MiniMap: number;
        };
    };
    resource: {
        wood: number;
        food: number;
        stone: number;
        points: number;
        kills: number;
    };
    constructor(connection: MooMooIOConnection);
    clear(): void;
    __reset(): void;
    __init(): void;
    __spawn(): void;
    __death(): void;
    __updateProgress(packet: UpdateProgress): void;
    __updateUpgrades(packet: UpdateUpgrades): void;
    __updateItems(packet: UpdateItems): void;
    __updateItemStore(packet: UpdateItemStore): void;
    __updateItemUsage(packet: UpdateItemUsage): void;
    __updateResource(packet: UpdateResource): void;
    /**
     * @description This packet is used to create your character in the game.
     * @param name The name of your character.
     * @param skinID The skin ID of your character.
     * @param haveStartPackage Determines whether your character should start with a fast start-up package (having 100 resources for each resource).
     * @param force is used to FORCE THE spawn. which is helpful when bug occurs
     */
    spawn(name: string, skinID: number, haveStartPackage?: boolean, force?: boolean): MyPlayer;
    /**
     * @description this packet is used to ping the game
     * @param target either `MiniMap` or `Connection`
     * @note
     * > if the `target` is `MiniMap` then the server gonna responses with `UpdateMiniMap`.......
     * > if the `target` is `Connection` then the server gonna responses with `Pong`
     */
    ping(target: "MiniMap" | "Connection"): MyPlayer;
    /**
     * @description This packet is used to purchase/buy an `Accessory` or `Hat` in the game.
     * @ignored if you already own the item or if you don't have enough gold to make the purchase. The packet will be ignored.
     * @param name - The name of the hat or accessory you want to buy.
     * @param itemType can be either `Accessory` or `Hat`.
     * @note If you haven't spawned in the game yet, this packet will be ignored
     */
    buy<Type extends "Hat" | "Accessory", Name extends Type extends "Hat" ? HatName : AccessoryName>(itemType: Type, HatName: Name): MyPlayer;
    /**
     * @description This packet is used to **equip** an `Accessory` or `Hat` in the game.
     * @ignored if you don't have that item yet. the packet will be ignored.
     * @param name - The name of the hat or accessory you want to equip.
     * @param itemType can be either `Accessory` or `Hat`.
     * @note If you haven't spawned in the game yet, this packet will be ignored.
     */
    equip<Type extends "Hat" | "Accessory", Name extends Type extends "Hat" ? HatName : AccessoryName>(itemType: Type, HatName: Name): MyPlayer;
    /**
     * @description This packet is used to upgrade your chosen items in the game.
     * @param listOf a list of names of the item you want to upgrade to.
     * @note If you do not meet the necessary conditions for the upgrade, this packet will be ignored.
     */
    upgrade<Name extends GameItemName | WeaponName>(listOf: Name[]): MyPlayer;
    /**
     * @description This packet is used to upgrade your chosen items in the game.
     * @param name The name of the item you want to upgrade to.
     * @note If you do not meet the necessary conditions for the upgrade, this packet will be ignored.
     */
    upgrade<Name extends GameItemName | WeaponName>(itemName: Name): MyPlayer;
    /**
     * @description This packet is used to punch (hit) in the game
     * @param direction is the direction the player should face before updating the status (in radian).
     */
    punch(direction: number): MyPlayer;
    /**
     * @description this packet is used to toggle auto-punch
     * @notSafe true
     */
    autoPunch(state: boolean): MyPlayer;
    /**
     * @description this packet is used to update your character direction in the game.
     * @param direction the direction your character is facing (in radian)
     *
     * @note this direction may be overwritten by `punch`
     */
    setDirection(direction: number): MyPlayer;
    /**
     * @description This packet is used to change the item held by your player.
     * @param name - The name of the weapon or item you want to hold.
     * @param itemType can be either `Weapon` or `Item`.
     */
    hold<Type extends "Weapon" | "Item", Name extends Type extends "Weapon" ? WeaponName : GameItemName>(itemType: Type, HatName: Name): MyPlayer;
    /**
     * @description This function is used to perform an action of placing or using an item by the player in the game.
     * @param itemName The name of the item that the player wants to use or place.
     * @param backTo The item that the player should return to after completing the task.
     * @param direction The direction in which the player should place or use the item.
     */
    place(itemName: GameItemName, backTo: WeaponName, direction?: number): MyPlayer;
    /**
     *
     * @description this packet is used to create a team in the game.
     * @ignored If you are already in a team or if the title you provide is already being used by another team. this packet will be ignored
     * @param teamTitle unique title for the team.
     *
     * @note you can have one team at the same time.
     */
    createTeam(teamTitle: string): MyPlayer;
    /**
     *
     * @description this packet is used to **leave your current team.
     * @ignored If you are not in a team. this packet will be ignored.
     */
    leaveTeam(): MyPlayer;
    /**
     *
     * @description This packet is used to ask to join a team in the game.
     * @ignored If you are already in a team, this packet will be ignored.
     * @param teamTitle The name of the team you want to join.
     * @note If the team cannot be found, this packet will be ignored.
     */
    joinRequest(teamTitle: string): MyPlayer;
    get currentAge(): number;
    get currentXP(): number;
    get maxXP(): number;
    get kit(): number[][];
}

declare class MooMooIOClient {
    readonly connection: MooMooIOConnection;
    readonly myPlayer: MyPlayer;
    protected players: Map<number, PlayerType>;
    protected teams: Map<string, Team>;
    protected gameObjects: GameObject[];
    constructor();
    protected init(): void;
    destroy(): void;
    protected clear(): void;
    protected onMessage(packet: ServerPacket): void;
}

/**
 * HookWebSocket
 * @description This function creates a custom WebSocket class that allows you to hook into the WebSocket lifecycle.
 * @param  target The target object that will be extended with the custom WebSocket class.
 * @param onHook A function that will be called with the new WebSocket instance as its only argument.
 * @returns The extended target object.
 */
declare function HookWebSocket(target: {
    WebSocket: {
        new (url: string | URL, protocols?: string | string[] | undefined): WebSocket;
        prototype: WebSocket;
        readonly CONNECTING: 0;
        readonly OPEN: 1;
        readonly CLOSING: 2;
        readonly CLOSED: 3;
    };
}, onHook: (data: WebSocket) => void): void;

export { HookWebSocket, MooMooIOClient as default };
