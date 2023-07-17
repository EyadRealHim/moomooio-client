"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  HookWebSocket: () => HookWebSocket,
  KeyboardOf: () => KeyboardOf,
  default: () => src_default,
  getAIType: () => getAIType,
  getAccessory: () => getAccessory,
  getGroup: () => getGroup,
  getHat: () => getHat,
  getItem: () => getItem,
  getProjectile: () => getProjectile,
  getUniqueName: () => getUniqueName,
  getWeapon: () => getWeapon,
  getWeaponVariants: () => getWeaponVariants
});
module.exports = __toCommonJS(src_exports);

// src/utils/PropertyTracker.ts
var PropertyTracker = class {
  constructor(content, register = void 0) {
    this.content = content;
    this.register = register;
  }
  set(content) {
    this.register = this.content;
    this.content = content;
  }
  isDiff() {
    return this.register !== this.content;
  }
  get current() {
    return this.content;
  }
  get previous() {
    return this.register;
  }
};

// src/instance/Player.ts
var import_unify_emitter = __toESM(require("unify-emitter"));
var _teamID, _isBestKiller, _weaponVariant, _isLeader, _isMyPlayer, _playerName, _weaponType, _buildType, _maxHealth, _playerID, _tailType, _hatType, _health, _initID, _skinID, _scale, _layer, _angle, _x, _y, _isInitialized;
var Player = class extends import_unify_emitter.default {
  constructor() {
    super(...arguments);
    __privateAdd(this, _teamID, null);
    __privateAdd(this, _isBestKiller, false);
    __privateAdd(this, _weaponVariant, 0);
    __privateAdd(this, _isLeader, false);
    __privateAdd(this, _isMyPlayer, false);
    __privateAdd(this, _playerName, void 0);
    __privateAdd(this, _weaponType, 0);
    __privateAdd(this, _buildType, -1);
    __privateAdd(this, _maxHealth, 100);
    __privateAdd(this, _playerID, void 0);
    __privateAdd(this, _tailType, new PropertyTracker(0));
    __privateAdd(this, _hatType, new PropertyTracker(0));
    __privateAdd(this, _health, new PropertyTracker(100));
    __privateAdd(this, _initID, void 0);
    __privateAdd(this, _skinID, 0);
    __privateAdd(this, _scale, 35);
    __privateAdd(this, _layer, 0);
    __privateAdd(this, _angle, new PropertyTracker(0));
    __privateAdd(this, _x, new PropertyTracker(0));
    __privateAdd(this, _y, new PropertyTracker(0));
    __privateAdd(this, _isInitialized, false);
  }
  initialize(initializePlayer) {
    __privateSet(this, _isMyPlayer, initializePlayer.isMyPlayer);
    __privateSet(this, _playerName, initializePlayer.playerName);
    __privateSet(this, _maxHealth, initializePlayer.maxHealth);
    __privateSet(this, _playerID, initializePlayer.playerID);
    __privateSet(this, _initID, initializePlayer.initID);
    __privateSet(this, _skinID, initializePlayer.skinID);
    __privateSet(this, _scale, initializePlayer.scale);
    __privateSet(this, _health, new PropertyTracker(initializePlayer.health));
    __privateSet(this, _angle, new PropertyTracker(initializePlayer.angle));
    __privateSet(this, _x, new PropertyTracker(initializePlayer.x));
    __privateSet(this, _y, new PropertyTracker(initializePlayer.y));
    __privateSet(this, _isInitialized, true);
  }
  update(playerData) {
    var _a, _b;
    __privateSet(this, _weaponVariant, playerData.weaponVariant);
    __privateSet(this, _isBestKiller, playerData.isBestKiller);
    __privateSet(this, _weaponType, playerData.weaponType);
    __privateGet(this, _tailType).set(playerData.tailType);
    __privateSet(this, _buildType, playerData.buildType);
    __privateGet(this, _hatType).set(playerData.hatType);
    __privateSet(this, _isLeader, playerData.isLeader);
    __privateGet(this, _angle).set(playerData.angle);
    __privateSet(this, _teamID, playerData.teamID);
    __privateSet(this, _layer, playerData.layer);
    __privateGet(this, _x).set(playerData.x);
    __privateGet(this, _y).set(playerData.y);
    if (__privateGet(this, _x).isDiff() || __privateGet(this, _y).isDiff()) {
      const deltaX = __privateGet(this, _x).current - (__privateGet(this, _x).previous || 0);
      const deltaY = __privateGet(this, _y).current - (__privateGet(this, _y).previous || 0);
      this.emit("move", {
        direction: Math.atan2(deltaY, deltaX),
        x: this.x,
        y: this.y,
        player: this
      });
    }
    if (__privateGet(this, _hatType).isDiff()) {
      this.emit("hatChange", {
        previous: (_a = __privateGet(this, _hatType).previous) != null ? _a : 0,
        current: __privateGet(this, _hatType).current,
        player: this
      });
    }
    if (__privateGet(this, _tailType).isDiff()) {
      this.emit("tailChange", {
        previous: (_b = __privateGet(this, _tailType).previous) != null ? _b : 0,
        current: __privateGet(this, _tailType).current,
        player: this
      });
    }
    if (__privateGet(this, _angle).isDiff()) {
      this.emit("rotate", {
        angle: this.angle,
        player: this
      });
    }
    this.emit("update", this);
  }
  clear() {
    this.emit("destroyed", null);
    __privateSet(this, _isInitialized, false);
    this.removeListeners();
  }
  /* prettier-ignore */
  get weaponVariant() {
    return __privateGet(this, _weaponVariant);
  }
  /* prettier-ignore */
  get isInitialized() {
    return __privateGet(this, _isInitialized);
  }
  /* prettier-ignore */
  get isBestKiller() {
    return __privateGet(this, _isBestKiller);
  }
  /* prettier-ignore */
  get tailType() {
    return __privateGet(this, _tailType).current;
  }
  /* prettier-ignore */
  get hatType() {
    return __privateGet(this, _hatType).current;
  }
  /* prettier-ignore */
  get weaponType() {
    return __privateGet(this, _weaponType);
  }
  /* prettier-ignore */
  get isMyPlayer() {
    return __privateGet(this, _isMyPlayer);
  }
  /* prettier-ignore */
  get playerName() {
    return __privateGet(this, _playerName);
  }
  /* prettier-ignore */
  get health() {
    return __privateGet(this, _health).current;
  }
  /* prettier-ignore */
  get buildType() {
    return __privateGet(this, _buildType);
  }
  /* prettier-ignore */
  get maxHealth() {
    return __privateGet(this, _maxHealth);
  }
  /* prettier-ignore */
  get angle() {
    return __privateGet(this, _angle).current;
  }
  /* prettier-ignore */
  get isLeader() {
    return __privateGet(this, _isLeader);
  }
  /* prettier-ignore */
  get playerID() {
    return __privateGet(this, _playerID);
  }
  /* prettier-ignore */
  get teamID() {
    return __privateGet(this, _teamID);
  }
  /* prettier-ignore */
  get initID() {
    return __privateGet(this, _initID);
  }
  /* prettier-ignore */
  get skinID() {
    return __privateGet(this, _skinID);
  }
  /* prettier-ignore */
  get layer() {
    return __privateGet(this, _layer);
  }
  /* prettier-ignore */
  get scale() {
    return __privateGet(this, _scale);
  }
  /* prettier-ignore */
  get x() {
    return __privateGet(this, _x).current;
  }
  /* prettier-ignore */
  get y() {
    return __privateGet(this, _y).current;
  }
  setHealth(health) {
    var _a;
    __privateGet(this, _health).set(Math.min(this.maxHealth, Math.max(health, 0)));
    const prev = (_a = __privateGet(this, _health).previous) != null ? _a : 100;
    const curr = __privateGet(this, _health).current;
    this.emit("healthChange", {
      isHealing: prev - curr < 0,
      amount: Math.abs(prev - curr),
      player: this
    });
  }
  getTeam(teams) {
    return this.teamID && teams.get(this.teamID) || null;
  }
};
_teamID = new WeakMap();
_isBestKiller = new WeakMap();
_weaponVariant = new WeakMap();
_isLeader = new WeakMap();
_isMyPlayer = new WeakMap();
_playerName = new WeakMap();
_weaponType = new WeakMap();
_buildType = new WeakMap();
_maxHealth = new WeakMap();
_playerID = new WeakMap();
_tailType = new WeakMap();
_hatType = new WeakMap();
_health = new WeakMap();
_initID = new WeakMap();
_skinID = new WeakMap();
_scale = new WeakMap();
_layer = new WeakMap();
_angle = new WeakMap();
_x = new WeakMap();
_y = new WeakMap();
_isInitialized = new WeakMap();

// src/AntiKick.ts
var AntiKick = class _AntiKick {
  constructor() {
    this.observePackets = [
      {
        PACKET_ID: "2",
        current: 0,
        max: 10,
        is(data) {
          return data[2] == 50;
        }
      },
      {
        PACKET_ID: "c",
        current: 0,
        max: 20,
        is(data) {
          return data[2] == 99;
        }
      },
      {
        PACKET_ID: "5",
        current: 0,
        max: 10,
        is(data) {
          return data[2] == 53;
        }
      },
      {
        PACKET_ID: "13c",
        current: 0,
        max: 10,
        is(data) {
          return data[2] == 49 && data[3] == 51 && data[4] == 99;
        }
      },
      {
        PACKET_ID: "8",
        current: 0,
        max: 1,
        is(data) {
          return data[2] == 56;
        }
      },
      {
        PACKET_ID: "10",
        current: 0,
        max: 7,
        is(data) {
          return data[2] == 49 && data[3] == 48;
        }
      },
      {
        PACKET_ID: "12",
        current: 0,
        max: 7,
        is(data) {
          return data[2] == 49 && data[3] == 50;
        }
      },
      {
        PACKET_ID: "9",
        current: 0,
        max: 1,
        is(data) {
          return data[2] == 57;
        }
      },
      {
        PACKET_ID: "pp",
        current: 0,
        max: 1,
        is(data) {
          return data[2] == 112 && data[3] == 112;
        }
      },
      {
        PACKET_ID: "14",
        current: 0,
        max: 1,
        is(data) {
          return data[2] == 49 && data[3] == 52;
        }
      },
      {
        PACKET_ID: "7",
        current: 0,
        max: 5,
        is(data) {
          return data[2] == 55;
        }
      },
      {
        PACKET_ID: "6",
        current: 0,
        max: 10,
        is(data) {
          return data[2] == 54;
        }
      },
      {
        PACKET_ID: "sp",
        current: 0,
        max: 1,
        is(data) {
          return data[2] == 115 && data[3] == 112;
        }
      }
    ];
    this.interval = setInterval(this.restart.bind(this), 100);
  }
  destroy() {
    clearInterval(this.interval);
  }
  restart() {
    for (let i = this.observePackets.length - 1; i > -1; --i) {
      const observePacket = this.observePackets[i];
      observePacket && _AntiKick.resetObservePacket(observePacket);
    }
  }
  canSend(content) {
    for (let i = this.observePackets.length - 1; i > -1; --i) {
      const observePacket = this.observePackets[i];
      if (observePacket == null ? void 0 : observePacket.is(content)) {
        return _AntiKick.runObservePacket(observePacket);
      }
    }
    return true;
  }
  static runObservePacket(observePacket) {
    return ++observePacket.current <= observePacket.max;
  }
  static resetObservePacket(observePacket) {
    observePacket.current = 0;
  }
};

// src/ServerPackets/index.ts
var import_msgpack_lite = require("msgpack-lite");

// src/ServerPackets/UpdateTeamMembersList.ts
var import_zod = require("zod");
var schema = import_zod.z.tuple([import_zod.z.array(import_zod.z.union([import_zod.z.number(), import_zod.z.string()]))]);
var chunkSchema = import_zod.z.tuple([import_zod.z.number(), import_zod.z.string()]);
var _UpdateTeamMembersList = class _UpdateTeamMembersList {
  constructor(members) {
    this.members = members;
    this.PACKET_NAME = "UpdateTeamMembersList";
  }
  static parse(data) {
    const result = [];
    const info = schema.parse(data)[0];
    if (info)
      for (let i = 0; i < info.length; i += 2) {
        const content = info.slice(i, i + 2);
        const chunk = chunkSchema.parse(content);
        result.push({
          playerName: chunk[1],
          playerID: chunk[0]
        });
      }
    return new _UpdateTeamMembersList(result);
  }
};
_UpdateTeamMembersList.PACKET_ID = "sa";
_UpdateTeamMembersList.PACKET_NAME = "UpdateTeamMembersList";
var UpdateTeamMembersList = _UpdateTeamMembersList;

// src/ServerPackets/UpdateLeaderBoard.ts
var import_zod2 = require("zod");
var schema2 = import_zod2.z.tuple([import_zod2.z.array(import_zod2.z.union([import_zod2.z.number(), import_zod2.z.string()]))]);
var chunkSchema2 = import_zod2.z.tuple([import_zod2.z.number(), import_zod2.z.string(), import_zod2.z.number()]);
var _UpdateLeaderBoard = class _UpdateLeaderBoard {
  constructor(members) {
    this.members = members;
    this.PACKET_NAME = "UpdateLeaderBoard";
  }
  static parse(data) {
    const result = [];
    const info = schema2.parse(data)[0];
    for (let i = 0; i < info.length; i += 3) {
      const content = info.slice(i, i + 3);
      const chunk = chunkSchema2.parse(content);
      result.push({
        name: chunk[1],
        score: chunk[2],
        id: chunk[0]
      });
    }
    return new _UpdateLeaderBoard(result);
  }
};
_UpdateLeaderBoard.PACKET_ID = "5";
_UpdateLeaderBoard.PACKET_NAME = "UpdateLeaderBoard";
var UpdateLeaderBoard = _UpdateLeaderBoard;

// src/ServerPackets/InitializePlayer.ts
var import_zod3 = require("zod");
var initSchema = import_zod3.z.tuple([
  import_zod3.z.string(),
  import_zod3.z.number(),
  import_zod3.z.string(),
  import_zod3.z.number(),
  import_zod3.z.number(),
  import_zod3.z.number(),
  import_zod3.z.number(),
  import_zod3.z.number(),
  import_zod3.z.number(),
  import_zod3.z.unknown()
]);
var schema3 = import_zod3.z.tuple([initSchema, import_zod3.z.boolean()]);
var _InitializePlayer = class _InitializePlayer {
  constructor(isMyPlayer, playerName, maxHealth, playerID, health, initID, skinID, scale, angle, x, y) {
    this.isMyPlayer = isMyPlayer;
    this.playerName = playerName;
    this.maxHealth = maxHealth;
    this.playerID = playerID;
    this.health = health;
    this.initID = initID;
    this.skinID = skinID;
    this.scale = scale;
    this.angle = angle;
    this.x = x;
    this.y = y;
    this.PACKET_NAME = "InitializePlayer";
  }
  static parse(data) {
    const [
      [initID, playerID, playerName, x, y, angle, health, maxHealth, scale, skinID],
      isMyPlayer
    ] = schema3.parse(data);
    return new _InitializePlayer(
      isMyPlayer,
      playerName,
      maxHealth,
      playerID,
      health,
      initID,
      skinID,
      // TODO: Not safe
      scale,
      angle,
      x,
      y
    );
  }
};
_InitializePlayer.PACKET_ID = "2";
_InitializePlayer.PACKET_NAME = "InitializePlayer";
var InitializePlayer = _InitializePlayer;

// src/ServerPackets/PlayerDisconnect.ts
var import_zod4 = require("zod");
var schema4 = import_zod4.z.tuple([import_zod4.z.string()]);
var _PlayerDisconnect = class _PlayerDisconnect {
  constructor(initID) {
    this.initID = initID;
    this.PACKET_NAME = "PlayerDisconnect";
  }
  static parse(data) {
    return new _PlayerDisconnect(schema4.parse(data)[0]);
  }
};
_PlayerDisconnect.PACKET_ID = "4";
_PlayerDisconnect.PACKET_NAME = "PlayerDisconnect";
var PlayerDisconnect = _PlayerDisconnect;

// src/ServerPackets/TeamNotification.ts
var import_zod5 = require("zod");
var schema5 = import_zod5.z.tuple([import_zod5.z.number(), import_zod5.z.string()]);
var _TeamNotification = class _TeamNotification {
  constructor(playerID, playerName) {
    this.playerID = playerID;
    this.playerName = playerName;
    this.PACKET_NAME = "TeamNotification";
  }
  static parse(data) {
    return new _TeamNotification(...schema5.parse(data));
  }
};
_TeamNotification.PACKET_ID = "an";
_TeamNotification.PACKET_NAME = "TeamNotification";
var TeamNotification = _TeamNotification;

// src/ServerPackets/InitializeTeams.ts
var import_zod6 = require("zod");
var teamSchema = import_zod6.z.object({
  owner: import_zod6.z.number(),
  sid: import_zod6.z.string()
});
var schema6 = import_zod6.z.tuple([
  import_zod6.z.object({
    teams: import_zod6.z.array(teamSchema)
  })
]);
var _InitializeTeams = class _InitializeTeams {
  constructor(teams) {
    this.teams = teams;
    this.PACKET_NAME = "InitializeTeams";
  }
  static parse(data) {
    return new _InitializeTeams(
      schema6.parse(data)[0].teams.map((team) => {
        return {
          ownerID: team.owner,
          title: team.sid
        };
      })
    );
  }
};
_InitializeTeams.PACKET_ID = "id";
_InitializeTeams.PACKET_NAME = "InitializeTeams";
var InitializeTeams = _InitializeTeams;

// src/ServerPackets/SpawnProjectile.ts
var import_zod7 = require("zod");
var schema7 = import_zod7.z.tuple([
  import_zod7.z.number(),
  import_zod7.z.number(),
  import_zod7.z.number(),
  import_zod7.z.number(),
  import_zod7.z.number(),
  import_zod7.z.number(),
  import_zod7.z.number(),
  import_zod7.z.number()
]);
var _SpawnProjectile = class _SpawnProjectile {
  constructor(range, speed, layer, type, direction, projectileID, originX, originY, fireDate) {
    this.range = range;
    this.speed = speed;
    this.layer = layer;
    this.type = type;
    this.direction = direction;
    this.projectileID = projectileID;
    this.originX = originX;
    this.originY = originY;
    this.fireDate = fireDate;
    this.PACKET_NAME = "SpawnProjectile";
  }
  static parse(data) {
    const [originX, originY, direction, range, speed, type, layer, id] = schema7.parse(data);
    return new _SpawnProjectile(
      range,
      speed,
      layer,
      type,
      direction,
      id,
      originX,
      originY,
      Date.now()
    );
  }
};
_SpawnProjectile.PACKET_ID = "18";
_SpawnProjectile.PACKET_NAME = "SpawnProjectile";
var SpawnProjectile = _SpawnProjectile;

// src/ServerPackets/UpdateItemStore.ts
var import_zod8 = require("zod");
var schema8 = import_zod8.z.tuple([import_zod8.z.number(), import_zod8.z.union([import_zod8.z.number(), import_zod8.z.string()]), import_zod8.z.number()]);
var _UpdateItemStore = class _UpdateItemStore {
  constructor(method, type, itemID) {
    this.method = method;
    this.type = type;
    this.itemID = itemID;
    this.PACKET_NAME = "UpdateItemStore";
  }
  static parse(data) {
    const [isEquip, itemID, isAccessory] = schema8.parse(data);
    return new _UpdateItemStore(
      isEquip ? "Equipped" : "Purchased",
      isAccessory ? "Accessory" : "Hat",
      Number(itemID)
    );
  }
};
_UpdateItemStore.PACKET_ID = "us";
_UpdateItemStore.PACKET_NAME = "UpdateItemStore";
var UpdateItemStore = _UpdateItemStore;

// src/ServerPackets/UpdateItemUsage.ts
var import_zod9 = require("zod");
var schema9 = import_zod9.z.tuple([import_zod9.z.number(), import_zod9.z.number()]);
var _UpdateItemUsage = class _UpdateItemUsage {
  constructor(itemID, count) {
    this.itemID = itemID;
    this.count = count;
    this.PACKET_NAME = "UpdateItemUsage";
  }
  static parse(data) {
    return new _UpdateItemUsage(...schema9.parse(data));
  }
};
_UpdateItemUsage.PACKET_ID = "14";
_UpdateItemUsage.PACKET_NAME = "UpdateItemUsage";
var UpdateItemUsage = _UpdateItemUsage;

// src/ServerPackets/InitializeGame.ts
var import_zod10 = require("zod");
var schema10 = import_zod10.z.tuple([import_zod10.z.number()]);
var _InitializeGame = class _InitializeGame {
  constructor(MyPlayerID) {
    this.MyPlayerID = MyPlayerID;
    this.PACKET_NAME = "InitializeGame";
  }
  static parse(data) {
    return new _InitializeGame(schema10.parse(data)[0]);
  }
};
_InitializeGame.PACKET_ID = "1";
_InitializeGame.PACKET_NAME = "InitializeGame";
var InitializeGame = _InitializeGame;

// src/ServerPackets/SetObjectsData.ts
var import_zod11 = require("zod");
var schema11 = import_zod11.z.tuple([import_zod11.z.array(import_zod11.z.number().nullable())]);
var chunkSchema3 = import_zod11.z.tuple([
  import_zod11.z.number(),
  import_zod11.z.number(),
  import_zod11.z.number(),
  import_zod11.z.number(),
  import_zod11.z.number(),
  import_zod11.z.number().nullable(),
  import_zod11.z.number().nullable(),
  import_zod11.z.number()
]);
var _SetObjectsData = class _SetObjectsData {
  constructor(objects) {
    this.objects = objects;
    this.PACKET_NAME = "SetObjectsData";
  }
  static parse(data) {
    const result = [];
    const info = schema11.parse(data)[0];
    if (info)
      for (let i = 0; i < info.length; i += 8) {
        const content = info.slice(i, i + 8);
        const chunk = chunkSchema3.parse(content);
        result.push({
          ownerID: chunk[7],
          scale: chunk[4],
          dataIndex: chunk[6],
          type: chunk[5],
          rotation: chunk[3],
          id: chunk[0],
          x: chunk[1],
          y: chunk[2]
        });
      }
    return new _SetObjectsData(result);
  }
};
_SetObjectsData.PACKET_ID = "6";
_SetObjectsData.PACKET_NAME = "SetObjectsData";
var SetObjectsData = _SetObjectsData;

// src/ServerPackets/ShutdownNotice.ts
var import_zod12 = require("zod");
var schema12 = import_zod12.z.tuple([import_zod12.z.number()]);
var _ShutdownNotice = class _ShutdownNotice {
  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.PACKET_NAME = "ShutdownNotice";
  }
  static parse(data) {
    const [time] = schema12.parse(data);
    return new _ShutdownNotice(Math.floor(time / 60), time % 60);
  }
};
_ShutdownNotice.PACKET_ID = "20";
_ShutdownNotice.PACKET_NAME = "ShutdownNotice";
var ShutdownNotice = _ShutdownNotice;

// src/ServerPackets/UpdateProgress.ts
var import_zod13 = require("zod");
var schema13 = import_zod13.z.union([import_zod13.z.tuple([import_zod13.z.number()]), import_zod13.z.tuple([import_zod13.z.number(), import_zod13.z.number(), import_zod13.z.number()])]);
var _UpdateProgress = class _UpdateProgress {
  constructor(currentAge, currentXP, maxXP) {
    this.currentAge = currentAge;
    this.currentXP = currentXP;
    this.maxXP = maxXP;
    this.PACKET_NAME = "UpdateProgress";
  }
  static parse(data) {
    const [currentXP, maxXP, currentAge] = schema13.parse(data);
    return new _UpdateProgress(currentAge, currentXP, maxXP);
  }
};
_UpdateProgress.PACKET_ID = "15";
_UpdateProgress.PACKET_NAME = "UpdateProgress";
var UpdateProgress = _UpdateProgress;

// src/ServerPackets/UpdateResource.ts
var import_zod14 = require("zod");
var resourceTypeSchema = import_zod14.z.union([
  import_zod14.z.literal("wood"),
  import_zod14.z.literal("food"),
  import_zod14.z.literal("stone"),
  import_zod14.z.literal("points"),
  import_zod14.z.literal("kills")
]);
var schema14 = import_zod14.z.tuple([resourceTypeSchema, import_zod14.z.number(), import_zod14.z.number()]);
var _UpdateResource = class _UpdateResource {
  constructor(resourceType, resourceValue) {
    this.resourceType = resourceType;
    this.resourceValue = resourceValue;
    this.PACKET_NAME = "UpdateResource";
  }
  static parse(data) {
    const [type, value, _updateView] = schema14.parse(data);
    return new _UpdateResource(type, value);
  }
};
_UpdateResource.PACKET_ID = "9";
_UpdateResource.PACKET_NAME = "UpdateResource";
var UpdateResource = _UpdateResource;

// src/ServerPackets/UpdateUpgrades.ts
var import_zod15 = require("zod");
var schema15 = import_zod15.z.tuple([import_zod15.z.number(), import_zod15.z.number()]);
var _UpdateUpgrades = class _UpdateUpgrades {
  constructor(upgradeLevel, currentUpgradeLevel) {
    this.upgradeLevel = upgradeLevel;
    this.currentUpgradeLevel = currentUpgradeLevel;
    this.PACKET_NAME = "UpdateUpgrades";
  }
  static parse(data) {
    const [points, upgradeAge] = schema15.parse(data);
    return new _UpdateUpgrades(points + upgradeAge, upgradeAge);
  }
};
_UpdateUpgrades.PACKET_ID = "16";
_UpdateUpgrades.PACKET_NAME = "UpdateUpgrades";
var UpdateUpgrades = _UpdateUpgrades;

// src/ServerPackets/AnimateGameAI.ts
var import_zod16 = require("zod");
var schema16 = import_zod16.z.tuple([import_zod16.z.number()]);
var _AnimateGameAI = class _AnimateGameAI {
  constructor(gameAIID) {
    this.gameAIID = gameAIID;
    this.PACKET_NAME = "AnimateGameAI";
  }
  static parse(data) {
    return new _AnimateGameAI(schema16.parse(data)[0]);
  }
};
_AnimateGameAI.PACKET_ID = "aa";
_AnimateGameAI.PACKET_NAME = "AnimateGameAI";
var AnimateGameAI = _AnimateGameAI;

// src/ServerPackets/RemoveObjects.ts
var import_zod17 = require("zod");
var schema17 = import_zod17.z.tuple([import_zod17.z.number()]);
var _RemoveObjects = class _RemoveObjects {
  constructor(ownerID) {
    this.ownerID = ownerID;
    this.PACKET_NAME = "RemoveObjects";
  }
  static parse(data) {
    return new _RemoveObjects(schema17.parse(data)[0]);
  }
};
_RemoveObjects.PACKET_ID = "13";
_RemoveObjects.PACKET_NAME = "RemoveObjects";
var RemoveObjects = _RemoveObjects;

// src/ServerPackets/UpdateMiniMap.ts
var import_zod18 = require("zod");
var schema18 = import_zod18.z.tuple([import_zod18.z.union([import_zod18.z.array(import_zod18.z.union([import_zod18.z.number(), import_zod18.z.string()])), import_zod18.z.literal(0)])]);
var chunkSchema4 = import_zod18.z.tuple([import_zod18.z.number(), import_zod18.z.number()]);
var _UpdateMiniMap = class _UpdateMiniMap {
  constructor(points) {
    this.points = points;
    this.PACKET_NAME = "UpdateMiniMap";
  }
  static parse(data) {
    const result = [];
    const info = schema18.parse(data)[0];
    if (info instanceof Array)
      for (let i = 0; i < info.length; i += 2) {
        const content = info.slice(i, i + 2);
        const chunk = chunkSchema4.parse(content);
        result.push({
          x: chunk[0],
          y: chunk[1]
        });
      }
    return new _UpdateMiniMap(result);
  }
};
_UpdateMiniMap.PACKET_ID = "mm";
_UpdateMiniMap.PACKET_NAME = "UpdateMiniMap";
var UpdateMiniMap = _UpdateMiniMap;

// src/ServerPackets/UpdatePlayers.ts
var import_zod19 = require("zod");
var chunkSchema5 = import_zod19.z.tuple([
  import_zod19.z.number(),
  import_zod19.z.number(),
  import_zod19.z.number(),
  import_zod19.z.number(),
  import_zod19.z.number(),
  import_zod19.z.number(),
  import_zod19.z.number(),
  import_zod19.z.string().nullable(),
  // 8
  import_zod19.z.union([import_zod19.z.number(), import_zod19.z.string()]),
  import_zod19.z.union([import_zod19.z.number(), import_zod19.z.string()]),
  import_zod19.z.number(),
  import_zod19.z.number(),
  import_zod19.z.number()
]);
var schema19 = import_zod19.z.union([
  import_zod19.z.tuple([import_zod19.z.array(import_zod19.z.union([import_zod19.z.string().nullable(), import_zod19.z.number()]))]),
  import_zod19.z.tuple([])
]);
var _UpdatePlayers = class _UpdatePlayers {
  constructor(players) {
    this.players = players;
    this.PACKET_NAME = "UpdatePlayers";
  }
  static parse(data) {
    const result = [];
    const info = schema19.parse(data)[0];
    if (info)
      for (let i = 0; i < info.length; i += 13) {
        const content = info.slice(i, i + 13);
        const chunk = chunkSchema5.parse(content);
        result.push({
          isBestKiller: !!chunk[11],
          weaponVariant: chunk[6],
          weaponType: chunk[5],
          buildType: chunk[4],
          isLeader: !!chunk[8],
          tailType: Number(chunk[10]),
          hatType: Number(chunk[9]),
          layer: chunk[12],
          teamID: chunk[7],
          angle: chunk[3],
          playerID: chunk[0],
          x: chunk[1],
          y: chunk[2]
        });
      }
    return new _UpdatePlayers(result);
  }
};
_UpdatePlayers.PACKET_ID = "33";
_UpdatePlayers.PACKET_NAME = "UpdatePlayers";
var UpdatePlayers = _UpdatePlayers;

// src/ServerPackets/ObjectStrike.ts
var import_zod20 = require("zod");
var schema20 = import_zod20.z.tuple([import_zod20.z.number(), import_zod20.z.number()]);
var _ObjectStrike = class _ObjectStrike {
  constructor(forceDirection, objectID) {
    this.forceDirection = forceDirection;
    this.objectID = objectID;
    this.PACKET_NAME = "ObjectStrike";
  }
  static parse(data) {
    return new _ObjectStrike(...schema20.parse(data));
  }
};
_ObjectStrike.PACKET_ID = "8";
_ObjectStrike.PACKET_NAME = "ObjectStrike";
var ObjectStrike = _ObjectStrike;

// src/ServerPackets/RemoveObject.ts
var import_zod21 = require("zod");
var schema21 = import_zod21.z.tuple([import_zod21.z.number()]);
var _RemoveObject = class _RemoveObject {
  constructor(objectID) {
    this.objectID = objectID;
    this.PACKET_NAME = "RemoveObject";
  }
  static parse(data) {
    return new _RemoveObject(schema21.parse(data)[0]);
  }
};
_RemoveObject.PACKET_ID = "12";
_RemoveObject.PACKET_NAME = "RemoveObject";
var RemoveObject = _RemoveObject;

// src/ServerPackets/UpdateGameAI.ts
var import_zod22 = require("zod");
var schema22 = import_zod22.z.union([import_zod22.z.tuple([import_zod22.z.array(import_zod22.z.number())]), import_zod22.z.tuple([])]);
var chunkSchema6 = import_zod22.z.tuple([
  import_zod22.z.number(),
  import_zod22.z.number(),
  import_zod22.z.number(),
  import_zod22.z.number(),
  import_zod22.z.number(),
  import_zod22.z.number(),
  import_zod22.z.number()
]);
var _UpdateGameAI = class _UpdateGameAI {
  constructor(data) {
    this.data = data;
    this.PACKET_NAME = "UpdateGameAI";
  }
  static parse(data) {
    const result = [];
    const info = schema22.parse(data)[0];
    if (info)
      for (let i = 0; i < info.length; i += 7) {
        const content = info.slice(i, i + 7);
        const chunk = chunkSchema6.parse(content);
        result.push({
          health: chunk[5],
          type: chunk[1],
          rotation: chunk[4],
          // FIXME: uniqueName is string for cows.
          uniqueName: null,
          // getUniqueName(chunk[6]) || null,
          id: chunk[0],
          x: chunk[2],
          y: chunk[3]
        });
      }
    return new _UpdateGameAI(result);
  }
};
_UpdateGameAI.PACKET_ID = "a";
_UpdateGameAI.PACKET_NAME = "UpdateGameAI";
var UpdateGameAI = _UpdateGameAI;

// src/ServerPackets/UpdateHealth.ts
var import_zod23 = require("zod");
var schema23 = import_zod23.z.tuple([import_zod23.z.number(), import_zod23.z.number()]);
var _UpdateHealth = class _UpdateHealth {
  constructor(playerID, playerHealth) {
    this.playerID = playerID;
    this.playerHealth = playerHealth;
    this.PACKET_NAME = "UpdateHealth";
  }
  static parse(data) {
    return new _UpdateHealth(...schema23.parse(data));
  }
};
_UpdateHealth.PACKET_ID = "h";
_UpdateHealth.PACKET_NAME = "UpdateHealth";
var UpdateHealth = _UpdateHealth;

// src/ServerPackets/ReceiveChat.ts
var import_zod24 = require("zod");
var schema24 = import_zod24.z.tuple([import_zod24.z.number(), import_zod24.z.string()]);
var _ReceiveChat = class _ReceiveChat {
  constructor(ownerID, message) {
    this.ownerID = ownerID;
    this.message = message;
    this.PACKET_NAME = "ReceiveChat";
  }
  static parse(data) {
    return new _ReceiveChat(...schema24.parse(data));
  }
};
_ReceiveChat.PACKET_ID = "ch";
_ReceiveChat.PACKET_NAME = "ReceiveChat";
var ReceiveChat = _ReceiveChat;

// src/ServerPackets/TurretShoot.ts
var import_zod25 = require("zod");
var schema25 = import_zod25.z.tuple([import_zod25.z.number(), import_zod25.z.number()]);
var _TurretShoot = class _TurretShoot {
  constructor(turretID, angle) {
    this.turretID = turretID;
    this.angle = angle;
    this.PACKET_NAME = "TurretShoot";
  }
  static parse(data) {
    return new _TurretShoot(...schema25.parse(data));
  }
};
_TurretShoot.PACKET_ID = "sp";
_TurretShoot.PACKET_NAME = "TurretShoot";
var TurretShoot = _TurretShoot;

// src/ServerPackets/UpdateItems.ts
var import_zod26 = require("zod");
var schema26 = import_zod26.z.union([
  import_zod26.z.tuple([import_zod26.z.array(import_zod26.z.number()), import_zod26.z.number()]),
  import_zod26.z.tuple([import_zod26.z.array(import_zod26.z.number())])
]);
var _UpdateItems = class _UpdateItems {
  constructor(kit, isWeapon) {
    this.kit = kit;
    this.isWeapon = isWeapon;
    this.PACKET_NAME = "UpdateItems";
  }
  static parse(data) {
    const [kit, isWeapon] = schema26.parse(data);
    return new _UpdateItems(kit, !!isWeapon);
  }
};
_UpdateItems.PACKET_ID = "17";
_UpdateItems.PACKET_NAME = "UpdateItems";
var UpdateItems = _UpdateItems;

// src/ServerPackets/CreateTeam.ts
var import_zod27 = require("zod");
var teamSchema2 = import_zod27.z.object({
  owner: import_zod27.z.number(),
  sid: import_zod27.z.string()
});
var schema27 = import_zod27.z.tuple([teamSchema2]);
var _CreateTeam = class _CreateTeam {
  constructor(ownerID, title) {
    this.ownerID = ownerID;
    this.title = title;
    this.PACKET_NAME = "CreateTeam";
  }
  static parse(data) {
    const [info] = schema27.parse(data);
    return new _CreateTeam(info.owner, info.sid);
  }
};
_CreateTeam.PACKET_ID = "ac";
_CreateTeam.PACKET_NAME = "CreateTeam";
var CreateTeam = _CreateTeam;

// src/ServerPackets/DeleteTeam.ts
var import_zod28 = require("zod");
var schema28 = import_zod28.z.tuple([import_zod28.z.string()]);
var _DeleteTeam = class _DeleteTeam {
  constructor(title) {
    this.title = title;
    this.PACKET_NAME = "DeleteTeam";
  }
  static parse(data) {
    return new _DeleteTeam(...schema28.parse(data));
  }
};
_DeleteTeam.PACKET_ID = "ad";
_DeleteTeam.PACKET_NAME = "DeleteTeam";
var DeleteTeam = _DeleteTeam;

// src/ServerPackets/Disconnect.ts
var _Disconnect = class _Disconnect {
  constructor() {
    this.PACKET_NAME = "Disconnect";
  }
  static parse(_data2) {
    return new _Disconnect();
  }
};
_Disconnect.PACKET_ID = "d";
_Disconnect.PACKET_NAME = "Disconnect";
var Disconnect = _Disconnect;

// src/ServerPackets/TeamSignal.ts
var import_zod29 = require("zod");
var schema29 = import_zod29.z.tuple([import_zod29.z.number(), import_zod29.z.number()]);
var _TeamSignal = class _TeamSignal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.PACKET_NAME = "TeamSignal";
  }
  static parse(data) {
    return new _TeamSignal(...schema29.parse(data));
  }
};
_TeamSignal.PACKET_ID = "p";
_TeamSignal.PACKET_NAME = "TeamSignal";
var TeamSignal = _TeamSignal;

// src/ServerPackets/ShowText.ts
var import_zod30 = require("zod");
var schema30 = import_zod30.z.tuple([import_zod30.z.number(), import_zod30.z.number(), import_zod30.z.number(), import_zod30.z.number()]);
var _ShowText = class _ShowText {
  constructor(type, content, x, y) {
    this.type = type;
    this.content = content;
    this.x = x;
    this.y = y;
    this.PACKET_NAME = "ShowText";
  }
  static parse(data) {
    const [x, y, content] = schema30.parse(data);
    return new _ShowText(content >= 0 ? "Damage" : "Healing", content.toString(), x, y);
  }
};
_ShowText.PACKET_ID = "t";
_ShowText.PACKET_NAME = "ShowText";
var ShowText = _ShowText;

// src/ServerPackets/Unknown.ts
var _Unknown = class _Unknown {
  constructor(content) {
    this.content = content;
    this.PACKET_NAME = "Unknown";
  }
  static parse(data) {
    return new _Unknown(data);
  }
};
_Unknown.PACKET_ID = "*";
_Unknown.PACKET_NAME = "Unknown";
var Unknown = _Unknown;

// src/ServerPackets/IOInit.ts
var import_zod31 = require("zod");
var schema31 = import_zod31.z.tuple([import_zod31.z.string()]);
var _IOInit = class _IOInit {
  constructor(initID) {
    this.initID = initID;
    this.PACKET_NAME = "IOInit";
  }
  static parse(data) {
    return new _IOInit(schema31.parse(data)[0]);
  }
};
_IOInit.PACKET_ID = "io-init";
_IOInit.PACKET_NAME = "IOInit";
var IOInit = _IOInit;

// src/ServerPackets/Punch.ts
var import_zod32 = require("zod");
var schema32 = import_zod32.z.tuple([import_zod32.z.number(), import_zod32.z.number(), import_zod32.z.number()]);
var _Punch = class _Punch {
  constructor(ownerID, didHit, weaponType) {
    this.ownerID = ownerID;
    this.didHit = didHit;
    this.weaponType = weaponType;
    this.PACKET_NAME = "Punch";
  }
  static parse(data) {
    const [ownerID, didHit, weaponType] = schema32.parse(data);
    return new _Punch(ownerID, !!didHit, weaponType);
  }
};
_Punch.PACKET_ID = "7";
_Punch.PACKET_NAME = "Punch";
var Punch = _Punch;

// src/ServerPackets/Death.ts
var _Death = class _Death {
  constructor() {
    this.PACKET_NAME = "Death";
  }
  static parse(_data2) {
    return new _Death();
  }
};
_Death.PACKET_ID = "11";
_Death.PACKET_NAME = "Death";
var Death = _Death;

// src/ServerPackets/Pong.ts
var _Pong = class _Pong {
  constructor() {
    this.PACKET_NAME = "Pong";
  }
  static parse(_data2) {
    return new _Pong();
  }
};
_Pong.PACKET_ID = "pp";
_Pong.PACKET_NAME = "Pong";
var Pong = _Pong;

// src/ServerPackets/index.ts
var ServerPackets = {
  UpdateTeamMembersList,
  UpdateLeaderBoard,
  InitializePlayer,
  PlayerDisconnect,
  TeamNotification,
  InitializeTeams,
  SpawnProjectile,
  UpdateItemStore,
  UpdateItemUsage,
  InitializeGame,
  SetObjectsData,
  ShutdownNotice,
  UpdateProgress,
  UpdateResource,
  UpdateUpgrades,
  AnimateGameAI,
  RemoveObjects,
  UpdateMiniMap,
  UpdatePlayers,
  ObjectStrike,
  RemoveObject,
  UpdateGameAI,
  UpdateHealth,
  ReceiveChat,
  TurretShoot,
  UpdateItems,
  CreateTeam,
  DeleteTeam,
  Disconnect,
  TeamSignal,
  ShowText,
  Unknown,
  IOInit,
  Punch,
  Death,
  Pong
};
function decode(raw) {
  const [PACKET_ID, data] = (0, import_msgpack_lite.decode)(raw instanceof Uint8Array ? raw : new Uint8Array(raw));
  for (const packetName in ServerPackets) {
    const Packet = ServerPackets[packetName];
    if (Packet.PACKET_ID == PACKET_ID) {
      let packet;
      try {
        packet = Packet.parse(data);
      } catch (e) {
        packet = ServerPackets.Unknown.parse([PACKET_ID, data]);
        console.group(`Attempting to parse ${PACKET_ID} using ${Packet.PACKET_NAME} but failed`);
        console.error(e);
        console.info("Backup to `Unknown` Packet.");
        console.info(packet);
        console.groupEnd();
      }
      return packet;
    }
  }
  return ServerPackets.Unknown.parse([PACKET_ID, data]);
}

// src/MooMooIOConnection.ts
var import_unify_emitter2 = __toESM(require("unify-emitter"));
var _trusted, _socket, _initializeSocket, initializeSocket_fn;
var MooMooIOConnection = class extends import_unify_emitter2.default {
  constructor() {
    super(...arguments);
    __privateAdd(this, _initializeSocket);
    __privateAdd(this, _trusted, null);
    __privateAdd(this, _socket, null);
    this.antiKick = new AntiKick();
  }
  connect(ip, token) {
    const url = `wss://ip_${ip}.moomoo.io:8008/?gameIndex=0&token=${encodeURIComponent(token)}`;
    this.use(new WebSocket(url));
  }
  disconnect() {
    if (!__privateGet(this, _socket) || __privateGet(this, _socket).readyState == __privateGet(this, _socket).CLOSED)
      return;
    __privateGet(this, _socket).close();
  }
  destroy() {
    __privateSet(this, _socket, null);
    this.antiKick.destroy();
    this.removeListeners();
  }
  /**
   * Sends the specified data through the socket connection.
   * @param data - The data to be sent as a Uint8Array.
   * @returns A boolean value indicating if the request has been successfully sent.
   */
  send(data) {
    if (!__privateGet(this, _socket) || __privateGet(this, _socket).readyState != __privateGet(this, _socket).OPEN)
      return false;
    const canSend = data instanceof Uint8Array && this.antiKick.canSend(data);
    if (canSend) {
      __privateSet(this, _trusted, data);
      __privateGet(this, _socket).send(data);
      this.emit("send", data);
    }
    return canSend;
  }
  use(socket) {
    this.socket = socket;
  }
  set socket(socket) {
    if (socket instanceof WebSocket) {
      __privateSet(this, _socket, socket);
      __privateMethod(this, _initializeSocket, initializeSocket_fn).call(this);
    }
  }
  isOPEN() {
    return __privateGet(this, _socket) && __privateGet(this, _socket).readyState == __privateGet(this, _socket).OPEN;
  }
};
_trusted = new WeakMap();
_socket = new WeakMap();
_initializeSocket = new WeakSet();
initializeSocket_fn = function() {
  if (!__privateGet(this, _socket))
    return;
  __privateGet(this, _socket).binaryType = "arraybuffer";
  __privateGet(this, _socket).addEventListener("message", (ev) => {
    if (ev.data instanceof ArrayBuffer) {
      this.emit("rawMessage", new Uint8Array(ev.data));
      this.emit("message", decode(ev.data));
    }
  });
  __privateGet(this, _socket).addEventListener("open", () => {
    this.emit("open", null);
  });
  __privateGet(this, _socket).addEventListener("close", (ev) => {
    this.emit("close", {
      reason: ev.reason,
      code: ev.code
    });
  });
  __privateGet(this, _socket).addEventListener("error", () => {
    this.emit("error", null);
  });
  const oldSend = __privateGet(this, _socket).send.bind(__privateGet(this, _socket));
  __privateGet(this, _socket).send = (data) => {
    const isTrusted = __privateGet(this, _trusted) == data;
    __privateSet(this, _trusted, null);
    if (data instanceof Uint8Array) {
      oldSend(data);
      this.emit("deepSend", { data, isTrusted });
    }
  };
};

// src/ClientPacketOrganizer.ts
var import_msgpack_lite2 = require("msgpack-lite");
var _requestStack;
var ClientPacketOrganizer = class {
  constructor(connection) {
    this.connection = connection;
    __privateAdd(this, _requestStack, []);
  }
  destroy() {
    __privateSet(this, _requestStack, []);
  }
  /**
   * Generator function that reads and yields items from the request stack.
   * @returns An iterator for the items in the request stack.
   */
  *readRequestStack() {
    for (let item of __privateGet(this, _requestStack)) {
      yield item;
    }
    __privateSet(this, _requestStack, []);
  }
  /**
   * Pushes a new request to the request stack.
   * @param {Packet} input - The request to be added to the stack.
   */
  requestStackPush(input) {
    __privateGet(this, _requestStack).push(input);
  }
  parse(packet) {
    return __async(this, null, function* () {
      return this.connection.send((0, import_msgpack_lite2.encode)(packet));
    });
  }
  parseLast() {
    return __async(this, null, function* () {
      const packet = __privateGet(this, _requestStack).pop();
      return !!packet && (yield this.parse(packet));
    });
  }
  parseRequestStack() {
    return __async(this, null, function* () {
      for (let packet of this.readRequestStack()) {
        yield this.parse(packet);
      }
    });
  }
  /**
   *
   * @description This packet is used to respond to a join request you received as the team owner. You can either `Accept` or `Deny` the request.
   * @ignored If you don't own the team, this packet will be ignored.
   * @param answer Either `Accept` or `Deny`.
   *
   * @note The response is based on the order in which the requests were received, with the oldest request being answered first.
   */
  answerJoinRequest(answer) {
    this.requestStackPush(["11", [answer == "Accept" ? 1 : 0]]);
    return this;
  }
  /**
   * @description This packet is used to purchase/buy an `Accessory` or `Hat` in the game.
   * @ignored if you already own the item or if you don't have enough gold to make the purchase. The packet will be ignored.
   * @param itemID is the unique number that identifies the item (ID).
   * @param itemType can be either `Accessory` or `Hat`.
   * @note If you haven't spawned in the game yet, this packet will be ignored
   */
  buy(itemID, itemType) {
    this.requestStackPush(["13c", [1, itemID, itemType == "Accessory" ? 1 : 0]]);
    return this;
  }
  /**
   *
   * @description this packet is used to create a team in the game.
   * @ignored If you are already in a team or if the title you provide is already being used by another team. this packet will be ignored
   * @param teamTitle unique title for the team.
   *
   * @note you can have one team at the same time.
   */
  createTeam(teamTitle) {
    this.requestStackPush(["8", [teamTitle]]);
    return this;
  }
  /**
   * @description This packet is used to **equip** an `Accessory` or `Hat` in the game.
   * @ignored if you don't have that item yet. the packet will be ignored.
   * @param itemID is the identification number for that item (ID).
   * @param itemType can be either `Accessory` or `Hat`.
   * @note If you haven't spawned in the game yet, this packet will be ignored.
   */
  equip(itemID, itemType) {
    this.requestStackPush(["13c", [0, itemID, itemType == "Accessory" ? 1 : 0]]);
    return this;
  }
  /**
   * @description This packet is used to change the item held by your player.
   * @param itemID A unique code that identifies the item.
   * @param isWeapon A method to categorize the type of item.
   */
  holdItem(itemID, isWeapon) {
    this.requestStackPush(["5", [itemID, isWeapon]]);
    return this;
  }
  /**
   *
   * @description This packet is used to ask to join a team in the game.
   * @ignored If you are already in a team, this packet will be ignored.
   * @param teamTitle The name of the team you want to join.
   * @note If the team cannot be found, this packet will be ignored.
   */
  joinRequest(teamTitle) {
    this.requestStackPush(["10", [teamTitle]]);
    return this;
  }
  /**
   *
   * @description This packet is for removing someone from your team
   * @ignored If you are not the team owner. this packet will be ignored
   * @param playerID The ID of the player you want to kick from your team.
   */
  kickFromTeam(playerID) {
    this.requestStackPush(["12", [playerID]]);
    return this;
  }
  /**
   *
   * @description this packet is used to **leave your current team.
   * @ignored If you are not in a team. this packet will be ignored.
   */
  leaveTeam() {
    this.requestStackPush(["9", []]);
    return this;
  }
  /**
   * @description this packet is used to ping the game
   * @param target either `MiniMap` or `Connection`
   * @note
   * > if the `target` is `MiniMap` then the server gonna responses with `UpdateMiniMap`.......
   * > if the `target` is `Connection` then the server gonna responses with `Pong`
   */
  ping(target) {
    this.requestStackPush(target == "MiniMap" ? ["14", [1]] : ["pp", []]);
    return this;
  }
  /**
   * @description this packet is used to update your character direction in the game.
   * @param direction the direction your character is facing (in radian)
   *
   * @note this direction may be overwritten by `setPunchState`
   */
  setDirection(direction) {
    this.requestStackPush(["2", [direction]]);
    return this;
  }
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
  setPunchState(state, direction) {
    this.requestStackPush(["c", [state, direction]]);
    return this;
  }
  /**
   * @description This packet is used to send a message for nearby players
   * @param content the message content you want to send
   */
  chat(message) {
    this.requestStackPush(["ch", [message.slice(0, 30)]]);
    return this;
  }
  /**
   * @description This packet is used to create your character in the game.
   * @param name The name of your character.
   * @param skinID The skin ID of your character.
   * @param haveStartPackage Determines whether your character should start with a fast start-up package (having 100 resources for each resource).
   */
  spawn(name, skinID, haveStartPackage = true) {
    this.requestStackPush([
      "sp",
      [
        {
          moofoll: haveStartPackage,
          skin: skinID,
          name
        }
      ]
    ]);
    return this;
  }
  /**
   * @description this packet is used to toggle auto-punch
   * @notSafe true
   */
  toggleAutoPunchState() {
    this.requestStackPush(["7", [1]]);
    return this;
  }
  /**
   * @description This packet is used to toggle the lock of your player facing direction.
   * @note Not recommended to use. avoid use this as much as possible
   */
  toggleLockDir() {
    this.requestStackPush(["7", [0]]);
    return this;
  }
  /**
   * @description This packet is used to upgrade your chosen items in the game.
   * @param itemID A special code that identify the item.
   * @note If you do not meet the necessary conditions for the upgrade, this packet will be ignored.
   */
  upgrade(itemID) {
    this.requestStackPush(["6", [itemID]]);
    return this;
  }
};
_requestStack = new WeakMap();

// src/data/accessories.ts
var accessories_default = [
  {
    id: 12,
    name: "Snowball",
    price: 1e3,
    scale: 105,
    xOff: 18,
    desc: "no effect"
  },
  {
    id: 9,
    name: "Tree Cape",
    price: 1e3,
    scale: 90,
    desc: "no effect"
  },
  {
    id: 10,
    name: "Stone Cape",
    price: 1e3,
    scale: 90,
    desc: "no effect"
  },
  {
    id: 3,
    name: "Cookie Cape",
    price: 1500,
    scale: 90,
    desc: "no effect"
  },
  {
    id: 8,
    name: "Cow Cape",
    price: 2e3,
    scale: 90,
    desc: "no effect"
  },
  {
    id: 11,
    name: "Monkey Tail",
    price: 2e3,
    scale: 97,
    xOff: 25,
    desc: "Super speed but reduced damage",
    spdMult: 1.35,
    dmgMultO: 0.2
  },
  {
    id: 17,
    name: "Apple Basket",
    price: 3e3,
    scale: 80,
    xOff: 12,
    desc: "slowly regenerates health over time",
    healthRegen: 1
  },
  {
    id: 6,
    name: "Winter Cape",
    price: 3e3,
    scale: 90,
    desc: "no effect"
  },
  {
    id: 4,
    name: "Skull Cape",
    price: 4e3,
    scale: 90,
    desc: "no effect"
  },
  {
    id: 5,
    name: "Dash Cape",
    price: 5e3,
    scale: 90,
    desc: "no effect"
  },
  {
    id: 2,
    name: "Dragon Cape",
    price: 6e3,
    scale: 90,
    desc: "no effect"
  },
  {
    id: 1,
    name: "Super Cape",
    price: 8e3,
    scale: 90,
    desc: "no effect"
  },
  {
    id: 7,
    name: "Troll Cape",
    price: 8e3,
    scale: 90,
    desc: "no effect"
  },
  {
    id: 14,
    name: "Thorns",
    price: 1e4,
    scale: 115,
    xOff: 20,
    desc: "no effect"
  },
  {
    id: 15,
    name: "Blockades",
    price: 1e4,
    scale: 95,
    xOff: 15,
    desc: "no effect"
  },
  {
    id: 20,
    name: "Devils Tail",
    price: 1e4,
    scale: 95,
    xOff: 20,
    desc: "no effect"
  },
  {
    id: 16,
    name: "Sawblade",
    price: 12e3,
    scale: 90,
    spin: true,
    xOff: 0,
    desc: "deal damage to players that damage you",
    dmg: 0.15
  },
  {
    id: 13,
    name: "Angel Wings",
    price: 15e3,
    scale: 138,
    xOff: 22,
    desc: "slowly regenerates health over time",
    healthRegen: 3
  },
  {
    id: 19,
    name: "Shadow Wings",
    price: 15e3,
    scale: 138,
    xOff: 22,
    desc: "increased movement speed",
    spdMult: 1.1
  },
  {
    id: 18,
    name: "Blood Wings",
    price: 2e4,
    scale: 178,
    xOff: 26,
    desc: "restores health when you deal damage",
    healD: 0.2
  },
  {
    id: 21,
    name: "Corrupt X Wings",
    price: 2e4,
    scale: 178,
    xOff: 26,
    desc: "deal damage to players that damage you",
    dmg: 0.25
  }
].map((e) => Object.freeze(e));

// src/utils/getAccessory.ts
function getAccessory(IDOrNameOrProp, propValue) {
  if (propValue !== void 0)
    return accessories_default.find((accessory) => accessory[IDOrNameOrProp] == propValue);
  if (typeof IDOrNameOrProp == "string")
    return accessories_default.find((accessory) => accessory.name == IDOrNameOrProp);
  if (typeof IDOrNameOrProp == "number")
    return accessories_default.find((accessory) => accessory.id == IDOrNameOrProp);
  return void 0;
}

// src/data/weapons.ts
var weapons_default = [
  {
    id: 0,
    type: 0,
    age: -1,
    name: "tool hammer",
    desc: "tool for gathering all resources",
    src: "hammer_1",
    length: 140,
    width: 140,
    xOff: -3,
    yOff: 18,
    dmg: 25,
    range: 65,
    gather: 1,
    speed: 300
  },
  {
    id: 1,
    type: 0,
    age: 2,
    name: "hand axe",
    desc: "gathers resources at a higher rate",
    src: "axe_1",
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 30,
    spdMulti: 1,
    range: 70,
    gather: 2,
    speed: 400
  },
  {
    id: 2,
    type: 0,
    age: 8,
    pre: 1,
    name: "great axe",
    desc: "deal more damage and gather more resources",
    src: "great_axe_1",
    length: 140,
    width: 140,
    xOff: -8,
    yOff: 25,
    dmg: 35,
    spdMulti: 1,
    range: 75,
    gather: 4,
    speed: 400
  },
  {
    id: 3,
    type: 0,
    age: 2,
    name: "short sword",
    desc: "increased attack power but slower move speed",
    src: "sword_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 46,
    dmg: 35,
    spdMulti: 0.85,
    range: 110,
    gather: 1,
    speed: 300
  },
  {
    id: 4,
    type: 0,
    age: 8,
    pre: 3,
    name: "katana",
    desc: "greater range and damage",
    src: "samurai_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 59,
    dmg: 40,
    spdMulti: 0.8,
    range: 118,
    gather: 1,
    speed: 300
  },
  {
    id: 5,
    type: 0,
    age: 2,
    name: "polearm",
    desc: "long range melee weapon",
    src: "spear_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 45,
    knock: 0.2,
    spdMulti: 0.82,
    range: 142,
    gather: 1,
    speed: 700
  },
  {
    id: 6,
    type: 0,
    age: 2,
    name: "bat",
    desc: "fast long range melee weapon",
    src: "bat_1",
    iPad: 1.3,
    length: 110,
    width: 180,
    xOff: -8,
    yOff: 53,
    dmg: 20,
    knock: 0.7,
    range: 110,
    gather: 1,
    speed: 300
  },
  {
    id: 7,
    type: 0,
    age: 2,
    name: "daggers",
    desc: "really fast short range weapon",
    src: "dagger_1",
    iPad: 0.8,
    length: 110,
    width: 110,
    xOff: 18,
    yOff: 0,
    dmg: 20,
    knock: 0.1,
    range: 65,
    gather: 1,
    hitSlow: 0.1,
    spdMulti: 1.13,
    speed: 100
  },
  {
    id: 8,
    type: 0,
    age: 2,
    name: "stick",
    desc: "great for gathering but very weak",
    src: "stick_1",
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 1,
    spdMulti: 1,
    range: 70,
    gather: 7,
    speed: 400
  },
  {
    id: 9,
    type: 1,
    age: 6,
    name: "hunting bow",
    desc: "bow used for ranged combat and hunting",
    src: "bow_1",
    req: ["wood", 4],
    length: 120,
    width: 120,
    xOff: -6,
    yOff: 0,
    projectile: 0,
    spdMulti: 0.75,
    speed: 600
  },
  {
    id: 10,
    type: 1,
    age: 6,
    name: "great hammer",
    desc: "hammer used for destroying structures",
    src: "great_hammer_1",
    length: 140,
    width: 140,
    xOff: -9,
    yOff: 25,
    dmg: 10,
    spdMulti: 0.88,
    range: 75,
    sDmg: 7.5,
    gather: 1,
    speed: 400
  },
  {
    id: 11,
    type: 1,
    age: 6,
    name: "wooden shield",
    desc: "blocks projectiles and reduces melee damage",
    src: "shield_1",
    length: 120,
    width: 120,
    shield: 0.2,
    xOff: 6,
    yOff: 0,
    spdMulti: 0.7
  },
  {
    id: 12,
    type: 1,
    age: 8,
    pre: 9,
    name: "crossbow",
    desc: "deals more damage and has greater range",
    src: "crossbow_1",
    req: ["wood", 5],
    aboveHand: true,
    armS: 0.75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 2,
    spdMulti: 0.7,
    speed: 700
  },
  {
    id: 13,
    type: 1,
    age: 9,
    pre: 12,
    name: "repeater crossbow",
    desc: "high fire rate crossbow with reduced damage",
    src: "crossbow_2",
    req: ["wood", 10],
    aboveHand: true,
    armS: 0.75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 3,
    spdMulti: 0.7,
    speed: 230
  },
  {
    id: 14,
    type: 1,
    age: 6,
    name: "mc grabby",
    desc: "steals resources from enemies",
    src: "grab_1",
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 0,
    steal: 250,
    knock: 0.2,
    spdMulti: 1.05,
    range: 125,
    gather: 0,
    speed: 700
  },
  {
    id: 15,
    type: 1,
    age: 9,
    pre: 12,
    name: "musket",
    desc: "slow fire rate but high damage and range",
    src: "musket_1",
    req: ["stone", 10],
    aboveHand: true,
    rec: 0.35,
    armS: 0.6,
    hndS: 0.3,
    hndD: 1.6,
    length: 205,
    width: 205,
    xOff: 25,
    yOff: 0,
    projectile: 5,
    hideProjectile: true,
    spdMulti: 0.6,
    speed: 1500
  }
].map((e) => Object.freeze(e));

// src/utils/getWeapon.ts
function getWeapon(IDOrNameOrProp, propValue) {
  if (propValue !== void 0)
    return weapons_default.find((weapon) => weapon[IDOrNameOrProp] == propValue);
  if (typeof IDOrNameOrProp == "string")
    return weapons_default.find((weapon) => weapon.name == IDOrNameOrProp);
  if (typeof IDOrNameOrProp == "number")
    return weapons_default.find((weapon) => weapon.id == IDOrNameOrProp);
  return void 0;
}

// src/data/items.ts
var items_default = [
  {
    age: -1,
    group: 0,
    name: "apple",
    desc: "restores 20 health when consumed",
    req: [["food", 10]],
    scale: 22,
    holdOffset: 15,
    id: 0
  },
  {
    age: 3,
    group: 0,
    name: "cookie",
    desc: "restores 40 health when consumed",
    req: [["food", 15]],
    scale: 27,
    holdOffset: 15,
    id: 1
  },
  {
    age: 7,
    group: 0,
    name: "cheese",
    desc: "restores 30 health and another 50 over 5 seconds",
    req: [["food", 25]],
    scale: 27,
    holdOffset: 15,
    id: 2
  },
  {
    age: -1,
    group: 1,
    name: "wood wall",
    desc: "provides protection for your village",
    req: [["wood", 10]],
    projDmg: true,
    health: 380,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5,
    id: 3
  },
  {
    age: 3,
    group: 1,
    name: "stone wall",
    desc: "provides improved protection for your village",
    req: [["stone", 25]],
    health: 900,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5,
    id: 4
  },
  {
    age: 7,
    pre: 4,
    group: 1,
    name: "castle wall",
    desc: "provides powerful protection for your village",
    req: [["stone", 35]],
    health: 1500,
    scale: 52,
    holdOffset: 20,
    placeOffset: -5,
    id: 5
  },
  {
    age: -1,
    group: 2,
    name: "spikes",
    desc: "damages enemies when they touch them",
    req: [
      ["wood", 20],
      ["stone", 5]
    ],
    health: 400,
    dmg: 20,
    scale: 49,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5,
    id: 6
  },
  {
    age: 5,
    group: 2,
    name: "greater spikes",
    desc: "damages enemies when they touch them",
    req: [
      ["wood", 30],
      ["stone", 10]
    ],
    health: 500,
    dmg: 35,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5,
    id: 7
  },
  {
    age: 9,
    pre: 7,
    group: 2,
    name: "poison spikes",
    desc: "poisons enemies when they touch them",
    req: [
      ["wood", 35],
      ["stone", 15]
    ],
    health: 600,
    dmg: 30,
    pDmg: 5,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5,
    id: 8
  },
  {
    age: 9,
    pre: 7,
    group: 2,
    name: "spinning spikes",
    desc: "damages enemies when they touch them",
    req: [
      ["wood", 30],
      ["stone", 20]
    ],
    health: 500,
    dmg: 45,
    turnSpeed: 3e-3,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5,
    id: 9
  },
  {
    age: -1,
    group: 3,
    name: "windmill",
    desc: "generates gold over time",
    req: [
      ["wood", 50],
      ["stone", 10]
    ],
    health: 400,
    pps: 1,
    turnSpeed: 16e-4,
    spritePadding: 25,
    iconLineMulti: 12,
    scale: 45,
    holdOffset: 20,
    placeOffset: 5,
    id: 10
  },
  {
    age: 5,
    pre: 10,
    group: 3,
    name: "faster windmill",
    desc: "generates more gold over time",
    req: [
      ["wood", 60],
      ["stone", 20]
    ],
    health: 500,
    pps: 1.5,
    turnSpeed: 25e-4,
    spritePadding: 25,
    iconLineMulti: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5,
    id: 11
  },
  {
    age: 8,
    pre: 11,
    group: 3,
    name: "power mill",
    desc: "generates more gold over time",
    req: [
      ["wood", 100],
      ["stone", 50]
    ],
    health: 800,
    pps: 2,
    turnSpeed: 5e-3,
    spritePadding: 25,
    iconLineMulti: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5,
    id: 12
  },
  {
    age: 5,
    group: 4,
    type: 2,
    name: "mine",
    desc: "allows you to mine stone",
    req: [
      ["wood", 20],
      ["stone", 100]
    ],
    iconLineMulti: 12,
    scale: 65,
    holdOffset: 20,
    placeOffset: 0,
    id: 13
  },
  {
    age: 5,
    group: 11,
    type: 0,
    name: "sapling",
    desc: "allows you to farm wood",
    req: [
      ["wood", 150],
      ["wood", 30]
    ],
    iconLineMulti: 12,
    colDiv: 0.5,
    scale: 110,
    holdOffset: 50,
    placeOffset: -15,
    id: 14
  },
  {
    age: 4,
    group: 5,
    name: "pit trap",
    desc: "pit that traps enemies if they walk over it",
    req: [
      ["wood", 30],
      ["stone", 30]
    ],
    trap: true,
    ignoreCollision: true,
    hideFromEnemy: true,
    health: 500,
    colDiv: 0.2,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5,
    id: 15
  },
  {
    age: 4,
    group: 6,
    name: "boost pad",
    desc: "provides boost when stepped on",
    req: [
      ["stone", 20],
      ["wood", 5]
    ],
    ignoreCollision: true,
    boostSpeed: 1.5,
    health: 150,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5,
    id: 16
  },
  {
    age: 7,
    group: 7,
    doUpdate: true,
    name: "turret",
    desc: "defensive structure that shoots at enemies",
    req: [
      ["wood", 200],
      ["stone", 150]
    ],
    health: 800,
    projectile: 1,
    shootRange: 700,
    shootRate: 2200,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5,
    id: 17
  },
  {
    age: 7,
    group: 8,
    name: "platform",
    desc: "platform to shoot over walls and cross over water",
    req: [["wood", 20]],
    ignoreCollision: true,
    zIndex: 1,
    health: 300,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5,
    id: 18
  },
  {
    age: 7,
    group: 9,
    name: "healing pad",
    desc: "standing on it will slowly heal you",
    req: [
      ["wood", 30],
      ["food", 10]
    ],
    ignoreCollision: true,
    healCol: 15,
    health: 400,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5,
    id: 19
  },
  {
    age: 9,
    group: 10,
    name: "spawn pad",
    desc: "you will spawn here when you die but it will disappear",
    req: [
      ["wood", 100],
      ["stone", 100]
    ],
    health: 400,
    ignoreCollision: true,
    spawnPoint: true,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5,
    id: 20
  },
  {
    age: 7,
    group: 12,
    name: "blocker",
    desc: "blocks building in radius",
    req: [
      ["wood", 30],
      ["stone", 25]
    ],
    ignoreCollision: true,
    blocker: 300,
    health: 400,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5,
    id: 21
  },
  {
    age: 7,
    group: 13,
    name: "teleporter",
    desc: "teleports you to a random point on the map",
    req: [
      ["wood", 60],
      ["stone", 60]
    ],
    ignoreCollision: true,
    teleport: true,
    health: 200,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5,
    id: 22
  }
].map((e) => Object.freeze(e));

// src/utils/getItem.ts
function getItem(IDOrNameOrProp, propValue) {
  if (propValue !== void 0)
    return items_default.find((item) => item[IDOrNameOrProp] == propValue);
  if (typeof IDOrNameOrProp == "string")
    return items_default.find((item) => item.name == IDOrNameOrProp);
  if (typeof IDOrNameOrProp == "number") {
    return items_default[IDOrNameOrProp] || items_default.find((item) => item.id == IDOrNameOrProp);
  }
  return void 0;
}

// src/data/hats.ts
var hats_default = [
  {
    id: 45,
    name: "Shame!",
    dontSell: true,
    price: 0,
    scale: 120,
    desc: "hacks are for losers"
  },
  {
    id: 51,
    name: "Moo Cap",
    price: 0,
    scale: 120,
    desc: "coolest mooer around"
  },
  {
    id: 50,
    name: "Apple Cap",
    price: 0,
    scale: 120,
    desc: "apple farms remembers"
  },
  {
    id: 28,
    name: "Moo Head",
    price: 0,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 29,
    name: "Pig Head",
    price: 0,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 30,
    name: "Fluff Head",
    price: 0,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 36,
    name: "Pandou Head",
    price: 0,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 37,
    name: "Bear Head",
    price: 0,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 38,
    name: "Monkey Head",
    price: 0,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 44,
    name: "Polar Head",
    price: 0,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 35,
    name: "Fez Hat",
    price: 0,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 42,
    name: "Enigma Hat",
    price: 0,
    scale: 120,
    desc: "join the enigma army"
  },
  {
    id: 43,
    name: "Blitz Hat",
    price: 0,
    scale: 120,
    desc: "hey everybody i'm blitz"
  },
  {
    id: 49,
    name: "Bob XIII Hat",
    price: 0,
    scale: 120,
    desc: "like and subscribe"
  },
  {
    id: 57,
    name: "Pumpkin",
    price: 50,
    scale: 120,
    desc: "Spooooky"
  },
  {
    id: 8,
    name: "Bummle Hat",
    price: 100,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 2,
    name: "Straw Hat",
    price: 500,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 15,
    name: "Winter Cap",
    price: 600,
    scale: 120,
    desc: "allows you to move at normal speed in snow",
    coldM: 1
  },
  {
    id: 5,
    name: "Cowboy Hat",
    price: 1e3,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 4,
    name: "Ranger Hat",
    price: 2e3,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 18,
    name: "Explorer Hat",
    price: 2e3,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 31,
    name: "Flipper Hat",
    price: 2500,
    scale: 120,
    desc: "have more control while in water",
    watrImm: true
  },
  {
    id: 1,
    name: "Marksman Cap",
    price: 3e3,
    scale: 120,
    desc: "increases arrow speed and range",
    aMlt: 1.3
  },
  {
    id: 10,
    name: "Bush Gear",
    price: 3e3,
    scale: 160,
    desc: "allows you to disguise yourself as a bush"
  },
  {
    id: 48,
    name: "Halo",
    price: 3e3,
    scale: 120,
    desc: "no effect"
  },
  {
    id: 6,
    name: "Soldier Helmet",
    price: 4e3,
    scale: 120,
    desc: "reduces damage taken but slows movement",
    spdMulti: 0.94,
    dmgMulti: 0.75
  },
  {
    id: 23,
    name: "Anti Venom Gear",
    price: 4e3,
    scale: 120,
    desc: "makes you immune to poison",
    poisonRes: 1
  },
  {
    id: 13,
    name: "Medic Gear",
    price: 5e3,
    scale: 110,
    desc: "slowly regenerates health over time",
    healthRegen: 3
  },
  {
    id: 9,
    name: "Miners Helmet",
    price: 5e3,
    scale: 120,
    desc: "earn 1 extra gold per resource",
    extraGold: 1
  },
  {
    id: 32,
    name: "Musketeer Hat",
    price: 5e3,
    scale: 120,
    desc: "reduces cost of projectiles",
    projCost: 0.5
  },
  {
    id: 7,
    name: "Bull Helmet",
    price: 6e3,
    scale: 120,
    desc: "increases damage done but drains health",
    healthRegen: -5,
    dmgMultiO: 1.5,
    spdMulti: 0.96
  },
  {
    id: 22,
    name: "Emp Helmet",
    price: 6e3,
    scale: 120,
    desc: "turrets won't attack but you move slower",
    antiTurret: 1,
    spdMulti: 0.7
  },
  {
    id: 12,
    name: "Booster Hat",
    price: 6e3,
    scale: 120,
    desc: "increases your movement speed",
    spdMulti: 1.16
  },
  {
    id: 26,
    name: "Barbarian Armor",
    price: 8e3,
    scale: 120,
    desc: "knocks back enemies that attack you",
    dmgK: 0.6
  },
  {
    id: 21,
    name: "Plague Mask",
    price: 1e4,
    scale: 120,
    desc: "melee attacks deal poison damage",
    poisonDmg: 5,
    poisonTime: 6
  },
  {
    id: 46,
    name: "Bull Mask",
    price: 1e4,
    scale: 120,
    desc: "bulls won't target you unless you attack them",
    bullRepel: 1
  },
  {
    id: 14,
    name: "Windmill Hat",
    topSprite: true,
    price: 1e4,
    scale: 120,
    desc: "generates points while worn",
    pps: 1.5
  },
  {
    id: 11,
    name: "Spike Gear",
    topSprite: true,
    price: 1e4,
    scale: 120,
    desc: "deal damage to players that damage you",
    dmg: 0.45
  },
  {
    id: 53,
    name: "Turret Gear",
    topSprite: true,
    price: 1e4,
    scale: 120,
    desc: "you become a walking turret",
    turret: {
      proj: 1,
      range: 700,
      rate: 2500
    },
    spdMulti: 0.7
  },
  {
    id: 20,
    name: "Samurai Armor",
    price: 12e3,
    scale: 120,
    desc: "increased attack speed and fire rate",
    atkSpd: 0.78
  },
  {
    id: 58,
    name: "Dark Knight",
    price: 12e3,
    scale: 120,
    desc: "restores health when you deal damage",
    healD: 0.4
  },
  {
    id: 27,
    name: "Scavenger Gear",
    price: 15e3,
    scale: 120,
    desc: "earn double points for each kill",
    kScrM: 2
  },
  {
    id: 40,
    name: "Tank Gear",
    price: 15e3,
    scale: 120,
    desc: "increased damage to buildings but slower movement",
    spdMulti: 0.3,
    bDmg: 3.3
  },
  {
    id: 52,
    name: "Thief Gear",
    price: 15e3,
    scale: 120,
    desc: "steal half of a players gold when you kill them",
    goldSteal: 0.5
  },
  {
    id: 55,
    name: "Bloodthirstier",
    price: 2e4,
    scale: 120,
    desc: "Restore Health when dealing damage. And increased damage",
    healD: 0.25,
    dmgMultiO: 1.2
  },
  {
    id: 56,
    name: "Assassin Gear",
    price: 2e4,
    scale: 120,
    desc: "Go invisible when not moving. Can't eat. Increased speed",
    noEat: true,
    spdMulti: 1.1,
    invisTimer: 1e3
  }
].map((e) => Object.freeze(e));

// src/utils/getHat.ts
function getHat(IDOrNameOrProp, propValue) {
  if (propValue !== void 0)
    return hats_default.find((hat) => hat[IDOrNameOrProp] == propValue);
  if (typeof IDOrNameOrProp == "string")
    return hats_default.find((hat) => hat.name == IDOrNameOrProp);
  if (typeof IDOrNameOrProp == "number")
    return hats_default.find((hat) => hat.id == IDOrNameOrProp);
  return void 0;
}

// src/data/groups.ts
var groups_default = [
  {
    id: 0,
    name: "food",
    layer: 0,
    limit: Infinity
  },
  {
    id: 1,
    name: "walls",
    place: true,
    limit: 30,
    layer: 0
  },
  {
    id: 2,
    name: "spikes",
    place: true,
    limit: 15,
    layer: 0
  },
  {
    id: 3,
    name: "mill",
    place: true,
    limit: 7,
    layer: 1
  },
  {
    id: 4,
    name: "mine",
    place: true,
    limit: 1,
    layer: 0
  },
  {
    id: 5,
    name: "trap",
    place: true,
    limit: 6,
    layer: -1
  },
  {
    id: 6,
    name: "booster",
    place: true,
    limit: 12,
    layer: -1
  },
  {
    id: 7,
    name: "turret",
    place: true,
    limit: 2,
    layer: 1
  },
  {
    id: 8,
    name: "watchtower",
    placeable: true,
    limit: 12,
    layer: 1
  },
  {
    id: 9,
    name: "buff",
    place: true,
    limit: 4,
    layer: -1
  },
  {
    id: 10,
    name: "spawn",
    place: true,
    limit: 1,
    layer: -1
  },
  {
    id: 11,
    name: "sapling",
    place: true,
    limit: 2,
    layer: 0
  },
  {
    id: 12,
    name: "blocker",
    place: true,
    limit: 3,
    layer: -1
  },
  {
    id: 13,
    name: "teleporter",
    place: true,
    limit: 2,
    layer: -1
  }
].map((e) => Object.freeze(e));

// src/utils/getGroup.ts
function getGroup(groupIDOrName) {
  if (typeof groupIDOrName == "string")
    return groups_default.find((group) => group.name == groupIDOrName);
  else {
    return groups_default.find((group) => group.id == groupIDOrName);
  }
}

// src/instance/MyPlayer.ts
var START_MAX_XP = 300;
var MAX_XP_GROWTH = 1.2;
var maxXPRelativeToAge = (age) => {
  return START_MAX_XP * MAX_XP_GROWTH ** (age - 1);
};
var _currentAge, _currentXP, _maxXP, _currentUpgradeLevel, _upgradeLevel, _weaponKit, _itemsKit, _purchasedItems, _itemUsage, _mapPoints, _leaderBoard, _hold, hold_fn;
var MyPlayer = class extends Player {
  constructor(connection) {
    super();
    this.connection = connection;
    __privateAdd(this, _hold);
    this.state = {
      autoPunchState: false,
      alive: false,
      ping: {
        Connection: Date.now(),
        MiniMap: Date.now()
      }
    };
    this.resource = {
      wood: 100,
      food: 100,
      stone: 100,
      points: 100,
      kills: 0
    };
    __privateAdd(this, _currentAge, 1);
    __privateAdd(this, _currentXP, 0);
    __privateAdd(this, _maxXP, maxXPRelativeToAge(__privateGet(this, _currentAge)));
    __privateAdd(this, _currentUpgradeLevel, 0);
    __privateAdd(this, _upgradeLevel, 0);
    __privateAdd(this, _weaponKit, [0]);
    __privateAdd(this, _itemsKit, [0, 3, 6, 10]);
    __privateAdd(this, _purchasedItems, {
      Accessory: [],
      Hat: []
    });
    __privateAdd(this, _itemUsage, /* @__PURE__ */ new Map());
    // Key: ItemID, Value: ItemUsageCount
    __privateAdd(this, _mapPoints, []);
    __privateAdd(this, _leaderBoard, []);
    this.clientPacketOrganizer = new ClientPacketOrganizer(connection);
  }
  clear() {
    super.clear();
    this.__reset();
    __privateGet(this, _purchasedItems).Accessory = [];
    __privateGet(this, _purchasedItems).Hat = [];
    this.clientPacketOrganizer.destroy();
  }
  __reset() {
    this.state.autoPunchState = false;
    __privateSet(this, _currentAge, 1);
    __privateSet(this, _currentXP, 0);
    __privateSet(this, _maxXP, maxXPRelativeToAge(__privateGet(this, _currentAge)));
    __privateSet(this, _currentUpgradeLevel, 0);
    __privateSet(this, _upgradeLevel, 0);
    __privateSet(this, _weaponKit, [0]);
    __privateSet(this, _itemsKit, [0, 3, 6, 10]);
    this.resource = {
      wood: 100,
      food: 100,
      stone: 100,
      points: 100,
      kills: 0
    };
  }
  __init() {
    this.state.alive = false;
    this.__reset();
  }
  __spawn() {
    this.state.alive = true;
    this.__reset();
    this.emit("spawn", this);
  }
  __death() {
    this.state.alive = false;
    this.emit("death", this);
  }
  __updateProgress(packet) {
    var _a;
    const currentAge = (_a = packet.currentAge) != null ? _a : __privateGet(this, _currentAge);
    const maxXP = maxXPRelativeToAge(currentAge);
    __privateSet(this, _currentXP, packet.currentXP);
    __privateSet(this, _currentAge, currentAge);
    __privateSet(this, _maxXP, maxXP);
  }
  __updateUpgrades(packet) {
    __privateSet(this, _currentUpgradeLevel, packet.currentUpgradeLevel);
    __privateSet(this, _upgradeLevel, packet.upgradeLevel);
  }
  __updateItems(packet) {
    const kit = structuredClone(packet.kit);
    __privateSet(this, _weaponKit, packet.isWeapon ? kit : __privateGet(this, _weaponKit));
    __privateSet(this, _itemsKit, packet.isWeapon ? __privateGet(this, _itemsKit) : kit);
  }
  __updateItemStore(packet) {
    if (packet.method == "Purchased") {
      __privateGet(this, _purchasedItems)[packet.type].push(packet.itemID);
    }
  }
  __updateItemUsage(packet) {
    __privateGet(this, _itemUsage).set(packet.itemID, packet.count);
  }
  __updateResource(packet) {
    this.resource[packet.resourceType] = packet.resourceValue;
  }
  __updateMiniMap(packet) {
    __privateSet(this, _mapPoints, structuredClone(packet.points));
  }
  __updateLeaderBoard(packet) {
    __privateSet(this, _leaderBoard, structuredClone(packet.members));
  }
  /**
   * @description This packet is used to create your character in the game.
   * @param name The name of your character.
   * @param skinID The skin ID of your character.
   * @param haveStartPackage Determines whether your character should start with a fast start-up package (having 100 resources for each resource).
   * @param force is used to FORCE THE spawn. which is helpful when bug occurs
   */
  spawn(name, skinID, haveStartPackage = true, force = false) {
    if (!this.state.alive && !force)
      return this;
    this.clientPacketOrganizer.spawn(name, skinID, haveStartPackage).parseLast();
    return this;
  }
  /**
   * @description this packet is used to ping the game
   * @param target either `MiniMap` or `Connection`
   * @note
   * > if the `target` is `MiniMap` then the server gonna responses with `UpdateMiniMap`.......
   * > if the `target` is `Connection` then the server gonna responses with `Pong`
   */
  ping(target) {
    const lastRequest = this.state.ping[target];
    const now = Date.now();
    if (now - lastRequest > 100) {
      this.clientPacketOrganizer.ping(target).parseLast();
      this.state.ping[target] = now;
    }
    return this;
  }
  buy(itemType, AccessoryOrHatName) {
    if (!this.state.alive || !this.isInitialized)
      return this;
    const isAccessory = itemType == "Accessory";
    const item = (isAccessory ? getAccessory : getHat)(AccessoryOrHatName);
    if (!item)
      throw new Error(`Item Not Found ${AccessoryOrHatName} of type ${itemType}`);
    if (isAccessory && item.id == this.tailType)
      return this;
    if (!isAccessory && item.id == this.hatType)
      return this;
    if (item.price > this.resource.points)
      return this;
    if (__privateGet(this, _purchasedItems)[itemType].includes(item.id))
      return this;
    this.clientPacketOrganizer.buy(item.id, itemType).parseLast();
    return this;
  }
  equip(itemType, AccessoryOrHatName) {
    if (!this.state.alive || !this.isInitialized)
      return this;
    const isAccessory = itemType == "Accessory";
    const item = (isAccessory ? getAccessory : getHat)(AccessoryOrHatName.toString());
    if (AccessoryOrHatName == "None") {
      this.clientPacketOrganizer.equip(0, itemType).parseLast();
      return this;
    }
    if (!item)
      throw new Error(`Item Not Found ${AccessoryOrHatName} of type ${itemType}`);
    if (item.price != 0 && !__privateGet(this, _purchasedItems)[itemType].includes(item.id))
      return this;
    this.clientPacketOrganizer.equip(item.id, itemType).parseLast();
    return this;
  }
  upgrade(items) {
    var _a, _b, _c;
    if (items instanceof Array) {
      for (let itemName of items) {
        this.upgrade(itemName);
      }
      return this;
    }
    let item = getItem(items);
    const id = item ? item.id + 16 : (_b = (_a = item = getWeapon(items)) == null ? void 0 : _a.id) != null ? _b : -1;
    const age = (_c = item == null ? void 0 : item.age) != null ? _c : -Infinity;
    if (__privateGet(this, _upgradeLevel) - __privateGet(this, _currentUpgradeLevel) == 0 || age < __privateGet(this, _currentUpgradeLevel) || age > __privateGet(this, _upgradeLevel))
      return this;
    if (id == -1)
      throw new Error(`Item Not Found ${items}`);
    this.clientPacketOrganizer.upgrade(id).parseLast();
    return this;
  }
  /**
   * @description This packet is used to punch (hit) in the game
   * @param direction is the direction the player should face before updating the status (in radian).
   */
  punch(direction) {
    if (!this.state.alive || !this.isInitialized)
      return this;
    this.clientPacketOrganizer.setPunchState(true, direction).parseLast();
    this.clientPacketOrganizer.setPunchState(false, direction).parseLast();
    return this;
  }
  /**
   * @description this packet is used to toggle auto-punch
   * @notSafe true
   */
  autoPunch(state) {
    if (!this.state.alive || !this.isInitialized)
      return this;
    if (state == this.state.autoPunchState)
      return this;
    const oldState = this.state.autoPunchState;
    this.state.autoPunchState = state;
    this.clientPacketOrganizer.toggleAutoPunchState().parseLast().then((isSuccess) => {
      if (!isSuccess)
        this.state.autoPunchState = oldState;
    });
    return this;
  }
  /**
   * @description This packet is used to send a message for nearby players
   * @param content the message content you want to send
   */
  chat(message) {
    if (!this.state.alive || !this.isInitialized)
      return this;
    this.clientPacketOrganizer.chat(message).parseLast();
    return this;
  }
  /**
   * @description this packet is used to update your character direction in the game.
   * @param direction the direction your character is facing (in radian)
   *
   * @note this direction may be overwritten by `punch`
   */
  setDirection(direction) {
    if (!this.state.alive || !this.isInitialized)
      return this;
    this.clientPacketOrganizer.setDirection(direction).parseLast();
    return this;
  }
  hold(itemType, itemName) {
    return __privateMethod(this, _hold, hold_fn).call(this, itemType, itemName);
  }
  place(itemName, backTo, direction = this.angle) {
    if (!this.state.alive || !this.isInitialized)
      return this;
    __privateMethod(this, _hold, hold_fn).call(this, "Item", itemName);
    this.punch(direction);
    __privateMethod(this, _hold, hold_fn).call(this, "Weapon", backTo);
    return this;
  }
  /**
   *
   * @description this packet is used to create a team in the game.
   * @ignored If you are already in a team or if the title you provide is already being used by another team. this packet will be ignored
   * @param teamTitle unique title for the team.
   *
   * @note you can have one team at the same time.
   */
  createTeam(teamTitle) {
    if (!this.state.alive || !this.isInitialized)
      return this;
    if (typeof this.teamID == "string")
      return this;
    this.clientPacketOrganizer.createTeam(teamTitle).parseLast();
    return this;
  }
  /**
   *
   * @description this packet is used to **leave your current team.
   * @ignored If you are not in a team. this packet will be ignored.
   */
  leaveTeam() {
    if (!this.state.alive || !this.isInitialized)
      return this;
    if (typeof this.teamID != "string")
      return this;
    this.clientPacketOrganizer.leaveTeam().parseLast();
    return this;
  }
  /**
   *
   * @description This packet is used to ask to join a team in the game.
   * @ignored If you are already in a team, this packet will be ignored.
   * @param teamTitle The name of the team you want to join.
   * @note If the team cannot be found, this packet will be ignored.
   */
  joinRequest(teamTitle) {
    if (!this.state.alive || !this.isInitialized)
      return this;
    if (typeof this.teamID == "string")
      return this;
    this.clientPacketOrganizer.joinRequest(teamTitle).parseLast();
    return this;
  }
  // Getters & Setters:
  get currentAge() {
    return __privateGet(this, _currentAge);
  }
  get currentXP() {
    return __privateGet(this, _currentXP);
  }
  get maxXP() {
    return __privateGet(this, _maxXP);
  }
  get mapPoints() {
    return __privateGet(this, _mapPoints);
  }
  get leaderBoard() {
    return __privateGet(this, _leaderBoard);
  }
  get kit() {
    return [__privateGet(this, _weaponKit), __privateGet(this, _itemsKit)];
  }
  get primary() {
    return __privateGet(this, _weaponKit)[0];
  }
  get secondary() {
    var _a;
    return (_a = __privateGet(this, _weaponKit)[1]) != null ? _a : null;
  }
  get haveMine() {
    return __privateGet(this, _itemsKit)[4] == 13 || __privateGet(this, _itemsKit)[4] == 14;
  }
  get foodType() {
    return __privateGet(this, _itemsKit)[0];
  }
  get wallType() {
    return __privateGet(this, _itemsKit)[1];
  }
  get spikeType() {
    return __privateGet(this, _itemsKit)[2];
  }
  get millType() {
    return __privateGet(this, _itemsKit)[2];
  }
  get boostType() {
    var _a;
    return (_a = __privateGet(this, _itemsKit)[3]) != null ? _a : -1;
  }
  get turretType() {
    return __privateGet(this, _itemsKit)[4 + +this.haveMine];
  }
};
_currentAge = new WeakMap();
_currentXP = new WeakMap();
_maxXP = new WeakMap();
_currentUpgradeLevel = new WeakMap();
_upgradeLevel = new WeakMap();
_weaponKit = new WeakMap();
_itemsKit = new WeakMap();
_purchasedItems = new WeakMap();
_itemUsage = new WeakMap();
_mapPoints = new WeakMap();
_leaderBoard = new WeakMap();
_hold = new WeakSet();
hold_fn = function(itemType, itemName) {
  var _a;
  if (!this.state.alive || !this.isInitialized)
    return this;
  const isWeapon = itemType == "Weapon";
  const item = isWeapon ? getWeapon(
    itemName == "primary" ? this.primary : itemName == "secondary" ? this.secondary || 0 : itemName
  ) : getItem(
    itemName.toString().endsWith("Type") ? (_a = this[itemName]) != null ? _a : -1 : itemName
  );
  if (!item)
    throw new Error(`Item Not Found ${itemName} of type ${itemType}`);
  if (!isWeapon && item.id == this.buildType)
    return this;
  if (isWeapon && !__privateGet(this, _weaponKit).includes(item.id))
    return this;
  if (!isWeapon && !__privateGet(this, _itemsKit).includes(item.id))
    return this;
  const group = getGroup("group" in item ? item.group : -1);
  const ItemUsageCount = isWeapon ? -1 : __privateGet(this, _itemUsage).get((group == null ? void 0 : group.id) || -1);
  if (!isWeapon && group && group.limit <= ItemUsageCount)
    return this;
  this.clientPacketOrganizer.holdItem(item.id, isWeapon).parseLast();
  return this;
};

// src/instance/Team.ts
var Team = class {
  constructor(title, ownerID) {
    this.title = title;
    this.ownerID = ownerID;
    this.membersList = [];
  }
};

// src/instance/GameObject.ts
var import_unify_emitter3 = __toESM(require("unify-emitter"));

// src/data/config.ts
var config_default = {
  resourceTypes: ["wood", "food", "stone", "points"],
  treeScales: [150, 160, 165, 175],
  bushScales: [80, 85, 95],
  rockScales: [80, 85, 90],
  waterCurrent: 11e-4,
  snowBiomeTop: 2400,
  riverPadding: 114,
  waveSpeed: 1e-4,
  maxNameLength: 15,
  mapPingTime: 2200,
  bushesPerArea: 3,
  mapPingScale: 40,
  treesPerArea: 9,
  riverWidth: 724,
  snowSpeed: 0.75,
  mapScale: 14400,
  totalRocks: 32,
  areaCount: 7,
  waveMax: 1.3,
  goldOres: 7
};

// src/instance/GameObject.ts
var _dataIndex, _isInitialized2, _type, _rotation, _ownerID, _scale2, _id, _x2, _y2, _data, _owner;
var GameObject = class extends import_unify_emitter3.default {
  constructor() {
    super(...arguments);
    __privateAdd(this, _dataIndex, void 0);
    __privateAdd(this, _isInitialized2, false);
    __privateAdd(this, _type, void 0);
    __privateAdd(this, _rotation, void 0);
    __privateAdd(this, _ownerID, void 0);
    __privateAdd(this, _scale2, void 0);
    __privateAdd(this, _id, void 0);
    __privateAdd(this, _x2, void 0);
    __privateAdd(this, _y2, void 0);
    __privateAdd(this, _data, null);
    __privateAdd(this, _owner, null);
  }
  init(gameObjectData) {
    var _a, _b;
    __privateSet(this, _dataIndex, gameObjectData.dataIndex);
    __privateSet(this, _rotation, gameObjectData.rotation);
    __privateSet(this, _ownerID, gameObjectData.ownerID);
    __privateSet(this, _scale2, gameObjectData.scale);
    __privateSet(this, _type, gameObjectData.type);
    __privateSet(this, _id, gameObjectData.id);
    __privateSet(this, _x2, gameObjectData.x);
    __privateSet(this, _y2, gameObjectData.y);
    __privateSet(this, _data, (_b = items_default[(_a = __privateGet(this, _dataIndex)) != null ? _a : -1]) != null ? _b : null);
    __privateSet(this, _isInitialized2, true);
  }
  clear() {
    this.removeListeners();
    __privateSet(this, _data, null);
  }
  get identity() {
    var _a, _b;
    const biomeID = this.y >= config_default.mapScale - config_default.snowBiomeTop ? 2 : this.y <= config_default.snowBiomeTop ? 1 : 0;
    return (_b = (_a = __privateGet(this, _data)) == null ? void 0 : _a.name) != null ? _b : __privateGet(this, _type) == 0 ? "tree" : __privateGet(this, _type) == 1 ? biomeID == 2 ? "cactus" : "bush" : __privateGet(this, _type) == 2 ? "rock" : __privateGet(this, _type) == 3 ? "gold" : "unknown";
  }
  __auth(playerOrPlayers) {
    if (!__privateGet(this, _isInitialized2))
      return false;
    if (playerOrPlayers instanceof Array) {
      for (let player of playerOrPlayers) {
        if (this.__auth(player))
          return true;
      }
    } else if (playerOrPlayers.isInitialized && playerOrPlayers.playerID == this.ownerID) {
      __privateSet(this, _owner, playerOrPlayers);
      playerOrPlayers.emit("place", this);
      this.emit("auth", playerOrPlayers);
      return true;
    }
    return false;
  }
  /* prettier-ignore */
  get isInitialized() {
    return __privateGet(this, _isInitialized2);
  }
  /* prettier-ignore */
  get dataIndex() {
    return __privateGet(this, _dataIndex);
  }
  /* prettier-ignore */
  get rotation() {
    return __privateGet(this, _rotation);
  }
  /* prettier-ignore */
  get ownerID() {
    return __privateGet(this, _ownerID);
  }
  /* prettier-ignore */
  get owner() {
    return __privateGet(this, _owner);
  }
  /* prettier-ignore */
  get scale() {
    return __privateGet(this, _scale2);
  }
  /* prettier-ignore */
  get type() {
    return __privateGet(this, _type);
  }
  /* prettier-ignore */
  get data() {
    return __privateGet(this, _data);
  }
  /* prettier-ignore */
  get id() {
    return __privateGet(this, _id);
  }
  /* prettier-ignore */
  get x() {
    return __privateGet(this, _x2);
  }
  /* prettier-ignore */
  get y() {
    return __privateGet(this, _y2);
  }
};
_dataIndex = new WeakMap();
_isInitialized2 = new WeakMap();
_type = new WeakMap();
_rotation = new WeakMap();
_ownerID = new WeakMap();
_scale2 = new WeakMap();
_id = new WeakMap();
_x2 = new WeakMap();
_y2 = new WeakMap();
_data = new WeakMap();
_owner = new WeakMap();

// src/instance/GameAI.ts
var import_unify_emitter4 = __toESM(require("unify-emitter"));
var _uniqueName, _health2, _type2, _angle2, _id2, _x3, _y3, _isInitialized3;
var GameAI = class extends import_unify_emitter4.default {
  constructor() {
    super();
    __privateAdd(this, _uniqueName, void 0);
    __privateAdd(this, _health2, void 0);
    __privateAdd(this, _type2, void 0);
    __privateAdd(this, _angle2, void 0);
    __privateAdd(this, _id2, void 0);
    __privateAdd(this, _x3, void 0);
    __privateAdd(this, _y3, void 0);
    __privateAdd(this, _isInitialized3, false);
    __privateSet(this, _health2, new PropertyTracker(0));
    __privateSet(this, _angle2, new PropertyTracker(0));
    __privateSet(this, _x3, new PropertyTracker(0));
    __privateSet(this, _y3, new PropertyTracker(0));
  }
  init(gameObjectData) {
    __privateSet(this, _uniqueName, gameObjectData.uniqueName);
    __privateSet(this, _type2, gameObjectData.type);
    __privateSet(this, _id2, gameObjectData.id);
    __privateGet(this, _angle2).set(gameObjectData.rotation);
    __privateGet(this, _health2).set(gameObjectData.health);
    __privateGet(this, _x3).set(gameObjectData.x);
    __privateGet(this, _y3).set(gameObjectData.y);
    if (__privateGet(this, _isInitialized3)) {
      if (__privateGet(this, _x3).isDiff() || __privateGet(this, _y3).isDiff()) {
        const deltaX = __privateGet(this, _x3).current - (__privateGet(this, _x3).previous || 0);
        const deltaY = __privateGet(this, _y3).current - (__privateGet(this, _y3).previous || 0);
        this.emit("move", {
          direction: Math.atan2(deltaY, deltaX),
          x: this.x,
          y: this.y,
          player: this
        });
      }
      if (__privateGet(this, _angle2).isDiff()) {
        this.emit("rotate", {
          angle: this.angle,
          player: this
        });
      }
      this.emit("update", this);
    }
    __privateSet(this, _isInitialized3, true);
  }
  get identity() {
    if (__privateGet(this, _type2) == 0)
      return "Cow";
    if (__privateGet(this, _type2) == 1)
      return "Pig";
    if (__privateGet(this, _type2) == 2)
      return "Bull";
    if (__privateGet(this, _type2) == 3)
      return "Bully";
    if (__privateGet(this, _type2) == 4)
      return "Wolf";
    if (__privateGet(this, _type2) == 5)
      return "Quack";
    if (__privateGet(this, _type2) == 6)
      return "Moostafa";
    if (__privateGet(this, _type2) == 7)
      return "Treasure";
    if (__privateGet(this, _type2) == 8)
      return "Moofie";
    return "Unknown";
  }
  get isBoss() {
    return __privateGet(this, _type2) == 8 || __privateGet(this, _type2) == 6;
  }
  get isFriendly() {
    return __privateGet(this, _type2) == 0 || __privateGet(this, _type2) == 1 || __privateGet(this, _type2) == 5 || __privateGet(this, _type2) == 7;
  }
  clear() {
    this.removeListeners();
  }
  /* prettier-ignore */
  get isInitialized() {
    return __privateGet(this, _isInitialized3);
  }
  /* prettier-ignore */
  get uniqueName() {
    return __privateGet(this, _uniqueName);
  }
  /* prettier-ignore */
  get angle() {
    return __privateGet(this, _angle2).current;
  }
  /* prettier-ignore */
  get health() {
    return __privateGet(this, _health2).current;
  }
  /* prettier-ignore */
  get type() {
    return __privateGet(this, _type2);
  }
  /* prettier-ignore */
  get id() {
    return __privateGet(this, _id2);
  }
  /* prettier-ignore */
  get x() {
    return __privateGet(this, _x3).current;
  }
  /* prettier-ignore */
  get y() {
    return __privateGet(this, _y3).current;
  }
};
_uniqueName = new WeakMap();
_health2 = new WeakMap();
_type2 = new WeakMap();
_angle2 = new WeakMap();
_id2 = new WeakMap();
_x3 = new WeakMap();
_y3 = new WeakMap();
_isInitialized3 = new WeakMap();

// src/MooMooIOClient.ts
var MooMooIOClient = class {
  constructor() {
    // Require Destroy
    this.connection = new MooMooIOConnection();
    // Require Clear
    this.myPlayer = new MyPlayer(this.connection);
    this.players = /* @__PURE__ */ new Map();
    this.gameAIs = /* @__PURE__ */ new Map();
    this.teams = /* @__PURE__ */ new Map();
    this.gameObjects = [];
    this.init();
  }
  init() {
    this.connection.on("message", this.onMessage.bind(this));
    this.connection.on("close", this.clear.bind(this));
    this.connection.on("open", this.clear.bind(this));
  }
  destroy() {
    this.connection.destroy();
    this.myPlayer.clear();
    this.clear();
  }
  clear() {
    this.gameObjects.forEach((gameObject) => gameObject.clear());
    this.gameAIs.forEach((gameAI) => gameAI.clear());
    this.players.forEach((player) => player.clear());
    this.players.clear();
    this.gameAIs.clear();
    this.teams.clear();
    this.gameObjects = [];
  }
  __update() {
  }
  onMessage(packet) {
    var _a, _b;
    switch (packet.PACKET_NAME) {
      case "UpdateGameAI": {
        for (let aiData of packet.data) {
          const ai = (_a = this.gameAIs.get(aiData.id)) != null ? _a : new GameAI();
          ai.init(aiData);
          this.gameAIs.set(ai.id, ai);
          console.log(ai.identity, ai.isFriendly, ai.isBoss);
        }
        break;
      }
      case "SetObjectsData": {
        for (let gameObjectData of packet.objects) {
          const gameObject = new GameObject();
          gameObject.init(gameObjectData);
          this.players.forEach(gameObject.__auth.bind(gameObject));
          this.gameObjects.push(gameObject);
        }
        break;
      }
      case "RemoveObject": {
        this.gameObjects = this.gameObjects.filter(
          (gameObject) => gameObject.id != packet.objectID
        );
        break;
      }
      case "RemoveObjects": {
        this.gameObjects = this.gameObjects.filter(
          (gameObject) => gameObject.ownerID != packet.ownerID
        );
        break;
      }
      case "ObjectStrike": {
        const gameObject = this.gameObjects.find((gameObject2) => gameObject2.id == packet.objectID);
        gameObject == null ? void 0 : gameObject.emit("strike", {
          forceDirection: packet.forceDirection
        });
        break;
      }
      case "TurretShoot": {
        const turret = this.gameObjects.find((gameObject) => gameObject.id == packet.turretID);
        turret == null ? void 0 : turret.emit("shoot", {
          direction: packet.angle,
          turret
        });
        break;
      }
      case "TeamNotification": {
        this.myPlayer.emit("teamNotification", structuredClone(packet));
        break;
      }
      case "TeamSignal": {
        this.myPlayer.emit("teamSignal", structuredClone(packet));
        break;
      }
      case "UpdateTeamMembersList": {
        const myPlayerTeam = this.myPlayer.getTeam(this.teams);
        if (myPlayerTeam) {
          myPlayerTeam.membersList = structuredClone(packet.members);
        }
        break;
      }
      case "InitializeTeams": {
        for (let team of packet.teams) {
          this.teams.set(team.title, new Team(team.title, team.ownerID));
        }
        break;
      }
      case "CreateTeam": {
        this.teams.set(packet.title, new Team(packet.title, packet.ownerID));
        break;
      }
      case "DeleteTeam": {
        this.teams.delete(packet.title);
        break;
      }
      case "UpdateLeaderBoard": {
        this.myPlayer.__updateLeaderBoard(packet);
        break;
      }
      case "UpdateMiniMap": {
        this.myPlayer.__updateMiniMap(packet);
        break;
      }
      case "UpdateResource": {
        this.myPlayer.__updateResource(packet);
        break;
      }
      case "UpdateItemUsage": {
        this.myPlayer.__updateItemUsage(packet);
        break;
      }
      case "UpdateItemStore": {
        this.myPlayer.__updateItemStore(packet);
        break;
      }
      case "UpdateUpgrades": {
        this.myPlayer.__updateUpgrades(packet);
        break;
      }
      case "UpdateProgress": {
        this.myPlayer.__updateProgress(packet);
        break;
      }
      case "UpdateItems": {
        this.myPlayer.__updateItems(packet);
        break;
      }
      case "Pong": {
        this.myPlayer.emit("pong", structuredClone(packet));
        break;
      }
      case "IOInit": {
        this.myPlayer.__init();
        this.myPlayer.emit("init", structuredClone(packet));
        break;
      }
      case "InitializeGame": {
        break;
      }
      case "Death": {
        this.myPlayer.__death();
        break;
      }
      case "Disconnect": {
        this.connection.disconnect();
        break;
      }
      case "InitializePlayer": {
        if (packet.isMyPlayer) {
          this.myPlayer.isInitialized && this.players.delete(this.myPlayer.playerID);
          this.players.set(packet.playerID, this.myPlayer);
        }
        let player = this.players.get(packet.playerID);
        if (!player) {
          player = new Player();
          this.players.set(packet.playerID, player);
        }
        player.initialize(packet);
        this.gameObjects.forEach((gameObject) => gameObject.__auth(player));
        if (packet.isMyPlayer) {
          this.myPlayer.__spawn();
        }
        break;
      }
      case "UpdateHealth": {
        let player = this.players.get(packet.playerID);
        player == null ? void 0 : player.setHealth(packet.playerHealth);
        break;
      }
      case "UpdatePlayers": {
        for (let playerData of packet.players) {
          (_b = this.players.get(playerData.playerID)) == null ? void 0 : _b.update(playerData);
        }
        this.__update();
        break;
      }
      case "PlayerDisconnect": {
        this.players.forEach((player) => {
          if (player.initID == packet.initID) {
            player.clear();
            this.players.delete(player.playerID);
          }
        });
        break;
      }
      case "Punch": {
        const player = this.players.get(packet.ownerID);
        player == null ? void 0 : player.emit("punch", {
          direction: player.angle,
          didHit: packet.didHit,
          player
        });
        break;
      }
      case "ReceiveChat": {
        const player = this.players.get(packet.ownerID);
        player == null ? void 0 : player.emit("chat", {
          message: packet.message,
          player
        });
        break;
      }
      default:
        break;
    }
  }
};

// src/HookWebSocket.ts
function HookWebSocket(target, onHook) {
  target.WebSocket = class extends target.WebSocket {
    constructor(url, protocols) {
      super(url, protocols);
      onHook(this);
    }
  };
}

// src/KeyboardOf.ts
function KeyboardOf(target) {
  const listeners = [];
  const isEq = (listener, key) => {
    return listener.options.caseSensitive ? listener.key == key : listener.key.toLowerCase() == key.toLowerCase();
  };
  target.addEventListener("keydown", function({ key }) {
    for (let listener of listeners) {
      if (!listener.isUp || !isEq(listener, key))
        continue;
      listener.isUp = false;
      listener.action();
    }
  });
  target.addEventListener("keyup", function({ key }) {
    for (let listener of listeners) {
      if (listener.isUp || !isEq(listener, key))
        continue;
      listener.isUp = true;
      listener.sleep();
      if (listener.options.once) {
        listeners.splice(listeners.indexOf(listener), 1);
      }
    }
  });
  const defaultOptions = {
    caseSensitive: false,
    once: false
  };
  function repeater(key, action, options, speed) {
    let interval = void 0;
    on(
      key,
      () => {
        interval = setInterval(action, speed != null ? speed : 50);
      },
      () => {
        clearInterval(interval);
        interval = void 0;
      },
      options
    );
  }
  function on(key, action, sleep, options) {
    listeners.push({
      key,
      action,
      isUp: true,
      sleep: sleep || (() => {
      }),
      options: __spreadValues(__spreadValues({}, defaultOptions), options || {})
    });
  }
  return {
    repeater,
    on
  };
}

// src/data/aiTypes.ts
var aiTypes_default = [
  {
    id: 0,
    src: "cow_1",
    killScore: 150,
    health: 500,
    weightM: 0.8,
    speed: 95e-5,
    turnSpeed: 1e-3,
    scale: 72,
    drop: ["food", 50]
  },
  {
    id: 1,
    src: "pig_1",
    killScore: 200,
    health: 800,
    weightM: 0.6,
    speed: 85e-5,
    turnSpeed: 1e-3,
    scale: 72,
    drop: ["food", 80]
  },
  {
    id: 2,
    name: "Bull",
    src: "bull_2",
    hostile: true,
    dmg: 20,
    killScore: 1e3,
    health: 1800,
    weightM: 0.5,
    speed: 94e-5,
    turnSpeed: 74e-5,
    scale: 78,
    viewRange: 800,
    chargePlayer: true,
    drop: ["food", 100]
  },
  {
    id: 3,
    name: "Bully",
    src: "bull_1",
    hostile: true,
    dmg: 20,
    killScore: 2e3,
    health: 2800,
    weightM: 0.45,
    speed: 1e-3,
    turnSpeed: 8e-4,
    scale: 90,
    viewRange: 900,
    chargePlayer: true,
    drop: ["food", 400]
  },
  {
    id: 4,
    name: "Wolf",
    src: "wolf_1",
    hostile: true,
    dmg: 8,
    killScore: 500,
    health: 300,
    weightM: 0.45,
    speed: 1e-3,
    turnSpeed: 2e-3,
    scale: 84,
    viewRange: 800,
    chargePlayer: true,
    drop: ["food", 200]
  },
  {
    id: 5,
    name: "Quack",
    src: "chicken_1",
    dmg: 8,
    killScore: 2e3,
    noTrap: true,
    health: 300,
    weightM: 0.2,
    speed: 18e-4,
    turnSpeed: 6e-3,
    scale: 70,
    drop: ["food", 100]
  },
  {
    id: 6,
    name: "MOOSTAFA",
    nameScale: 50,
    src: "enemy",
    hostile: true,
    dontRun: true,
    fixedSpawn: true,
    spawnDelay: 6e4,
    noTrap: true,
    colDmg: 100,
    dmg: 40,
    killScore: 8e3,
    health: 18e3,
    weightM: 0.4,
    speed: 7e-4,
    turnSpeed: 0.01,
    scale: 80,
    spriteMlt: 1.8,
    leapForce: 0.9,
    viewRange: 1e3,
    hitRange: 210,
    hitDelay: 1e3,
    chargePlayer: true,
    drop: ["food", 100]
  },
  {
    id: 7,
    name: "Treasure",
    hostile: true,
    nameScale: 35,
    src: "crate_1",
    fixedSpawn: true,
    spawnDelay: 12e4,
    colDmg: 200,
    killScore: 5e3,
    health: 2e4,
    weightM: 0.1,
    speed: 0,
    turnSpeed: 0,
    scale: 70,
    spriteMlt: 1
  },
  {
    id: 8,
    name: "MOOFIE",
    src: "wolf_2",
    hostile: true,
    fixedSpawn: true,
    dontRun: true,
    hitScare: 4,
    spawnDelay: 3e4,
    noTrap: true,
    nameScale: 35,
    dmg: 10,
    colDmg: 100,
    killScore: 3e3,
    health: 7e3,
    weightM: 0.45,
    speed: 15e-4,
    turnSpeed: 2e-3,
    scale: 90,
    viewRange: 800,
    chargePlayer: true,
    drop: ["food", 1e3]
  }
].map((e) => Object.freeze(e));

// src/utils/getAIType.ts
function getAIType(IDOrNameOrProp, propValue) {
  if (propValue !== void 0)
    return aiTypes_default.find((ai) => ai[IDOrNameOrProp] == propValue);
  if (typeof IDOrNameOrProp == "string")
    return aiTypes_default.find((ai) => ai.name == IDOrNameOrProp);
  if (typeof IDOrNameOrProp == "number")
    return aiTypes_default.find((ai) => ai.id == IDOrNameOrProp);
  return void 0;
}

// src/data/uniqueNames.ts
var uniqueNames_default = [
  "Sid",
  "Steph",
  "Bmoe",
  "Romn",
  "Jononthecool",
  "Fiona",
  "Vince",
  "Nathan",
  "Nick",
  "Flappy",
  "Ronald",
  "Otis",
  "Pepe",
  "Mc Donald",
  "Theo",
  "Fabz",
  "Oliver",
  "Jeff",
  "Jimmy",
  "Helena",
  "Reaper",
  "Ben",
  "Alan",
  "Naomi",
  "XYZ",
  "Clever",
  "Jeremy",
  "Mike",
  "Destined",
  "Stallion",
  "Allison",
  "Meaty",
  "Sophia",
  "Vaja",
  "Joey",
  "Pendy",
  "Murdoch",
  "Theo",
  "Jared",
  "July",
  "Sonia",
  "Mel",
  "Dexter",
  "Quinn",
  "Milky"
].map((e) => Object.freeze(e));

// src/utils/getUniqueName.ts
function getUniqueName(index) {
  return uniqueNames_default[index];
}

// src/data/projectiles.ts
var projectiles_default = [
  {
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 25,
    speed: 1.6,
    scale: 103,
    range: 1e3
  },
  {
    indx: 1,
    layer: 1,
    dmg: 25,
    scale: 20
  },
  {
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 35,
    speed: 2.5,
    scale: 103,
    range: 1200
  },
  {
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 30,
    speed: 2,
    scale: 103,
    range: 1200
  },
  {
    indx: 1,
    layer: 1,
    dmg: 16,
    scale: 20
  },
  {
    indx: 0,
    layer: 0,
    src: "bullet_1",
    dmg: 50,
    speed: 3.6,
    scale: 160,
    range: 1400
  }
].map((e) => Object.freeze(e));

// src/utils/getProjectiles.ts
function getProjectile(projectileTypeOrSrc) {
  if (typeof projectileTypeOrSrc == "string")
    return projectiles_default.find((projectile) => projectile.src == projectileTypeOrSrc);
  else {
    return projectiles_default[projectileTypeOrSrc];
  }
}

// src/data/weaponVariants.ts
var weaponVariants_default = [
  {
    id: 0,
    src: "",
    xp: 0,
    val: 1
  },
  {
    id: 1,
    src: "_g",
    xp: 3e3,
    val: 1.1
  },
  {
    id: 2,
    src: "_d",
    xp: 7e3,
    val: 1.18
  },
  {
    id: 3,
    src: "_r",
    poison: true,
    xp: 12e3,
    val: 1.18
  }
].map((e) => Object.freeze(e));

// src/utils/getWeaponVariants.ts
function getWeaponVariants(id) {
  return weaponVariants_default.find((e) => id == e.id);
}

// src/index.ts
var src_default = MooMooIOClient;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HookWebSocket,
  KeyboardOf,
  getAIType,
  getAccessory,
  getGroup,
  getHat,
  getItem,
  getProjectile,
  getUniqueName,
  getWeapon,
  getWeaponVariants
});
