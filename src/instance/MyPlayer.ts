import ClientPacketOrganizer from "../ClientPacketOrganizer";
import MooMooIOConnection from "../MooMooIOConnection";
import Player, { PlayerEvents } from "./Player";
import { EventsObject } from "unify-emitter";

import accessories from "../data/accessories";
import weapons from "../data/weapons";
import items from "../data/items";
import hats from "../data/hats";

import getAccessory from "../utils/getAccessory";
import getWeapon from "../utils/getWeapon";
import getItem from "../utils/getItem";
import getHat from "../utils/getHat";
import IOInit from "../ServerPackets/IOInit";
import Pong from "../ServerPackets/Pong";
import UpdateProgress from "../ServerPackets/UpdateProgress";
import UpdateUpgrades from "../ServerPackets/UpdateUpgrades";
import UpdateItems from "../ServerPackets/UpdateItems";
import UpdateItemStore from "../ServerPackets/UpdateItemStore";
import UpdateItemUsage from "../ServerPackets/UpdateItemUsage";
import getGroup from "../utils/getGroup";
import UpdateResource from "../ServerPackets/UpdateResource";

const START_MAX_XP = 300;
const MAX_XP_GROWTH = 1.2;

const maxXPRelativeToAge = (age: number) => {
  return START_MAX_XP * MAX_XP_GROWTH ** (age - 1);
};

type AccessoryName = (typeof accessories)["0"]["name"];
type HatName = (typeof hats)["0"]["name"];

type GameItemName = (typeof items)["0"]["name"];
type WeaponName = (typeof weapons)["0"]["name"];

export type MyPlayerEvents = EventsObject<
  PlayerEvents,
  {
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
  }
>;

export default class MyPlayer extends Player<MyPlayerEvents> {
  protected clientPacketOrganizer: ClientPacketOrganizer;
  protected state = {
    autoPunchState: false,
    alive: false,

    ping: {
      Connection: Date.now(),
      MiniMap: Date.now(),
    },
  };

  resource = {
    wood: 100,
    food: 100,
    stone: 100,
    points: 100,
    kills: 0,
  };

  #currentAge = 1;
  #currentXP = 0;
  #maxXP = maxXPRelativeToAge(this.#currentAge);

  #currentUpgradeLevel = 0;
  #upgradeLevel = 0;

  #weaponKit = [0];
  #itemsKit = [0, 3, 6, 10];

  #purchasedItems = {
    Accessory: [] as number[],
    Hat: [] as number[],
  };
  #itemUsage = new Map<number, number>(); // Key: ItemID, Value: ItemUsageCount

  constructor(readonly connection: MooMooIOConnection) {
    super();

    this.clientPacketOrganizer = new ClientPacketOrganizer(connection);
  }

  override clear() {
    super.clear();

    this.__reset();

    this.#purchasedItems.Accessory = [];
    this.#purchasedItems.Hat = [];
    this.clientPacketOrganizer.destroy();
  }

  __reset() {
    this.state.autoPunchState = false;

    this.#currentAge = 1;
    this.#currentXP = 0;
    this.#maxXP = maxXPRelativeToAge(this.#currentAge);

    this.#currentUpgradeLevel = 0;
    this.#upgradeLevel = 0;

    this.#weaponKit = [0];
    this.#itemsKit = [0, 3, 6, 10];
    this.resource = {
      wood: 100,
      food: 100,
      stone: 100,
      points: 100,
      kills: 0,
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

  __updateProgress(packet: UpdateProgress) {
    const currentAge = packet.currentAge ?? this.#currentAge;
    const maxXP = maxXPRelativeToAge(currentAge);

    this.#currentXP = packet.currentXP;
    this.#currentAge = currentAge;
    this.#maxXP = maxXP;
  }

  __updateUpgrades(packet: UpdateUpgrades) {
    this.#currentUpgradeLevel = packet.currentUpgradeLevel;
    this.#upgradeLevel = packet.upgradeLevel;
  }

  __updateItems(packet: UpdateItems) {
    const kit = structuredClone(packet.kit);

    this.#weaponKit = packet.isWeapon ? kit : this.#weaponKit;
    this.#itemsKit = packet.isWeapon ? this.#itemsKit : kit;
  }

  __updateItemStore(packet: UpdateItemStore) {
    if (packet.method == "Purchased") {
      this.#purchasedItems[packet.type].push(packet.itemID);
    }
  }

  __updateItemUsage(packet: UpdateItemUsage) {
    this.#itemUsage.set(packet.itemID, packet.count);
  }

  __updateResource(packet: UpdateResource) {
    this.resource[packet.resourceType] = packet.resourceValue;
  }

  /**
   * @description This packet is used to create your character in the game.
   * @param name The name of your character.
   * @param skinID The skin ID of your character.
   * @param haveStartPackage Determines whether your character should start with a fast start-up package (having 100 resources for each resource).
   * @param force is used to FORCE THE spawn. which is helpful when bug occurs
   */
  spawn(
    name: string,
    skinID: number,
    haveStartPackage: boolean = true,
    force: boolean = false
  ): MyPlayer {
    if (!this.state.alive && !force) return this;

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
  ping(target: "MiniMap" | "Connection"): MyPlayer {
    const lastRequest = this.state.ping[target];
    const now = Date.now();

    if (now - lastRequest > 100) {
      this.clientPacketOrganizer.ping(target).parseLast();
      this.state.ping[target] = now;
    }
    return this;
  }

  /**
   * @description This packet is used to purchase/buy an `Accessory` or `Hat` in the game.
   * @ignored if you already own the item or if you don't have enough gold to make the purchase. The packet will be ignored.
   * @param name - The name of the hat or accessory you want to buy.
   * @param itemType can be either `Accessory` or `Hat`.
   * @note If you haven't spawned in the game yet, this packet will be ignored
   */
  buy<Type extends "Hat" | "Accessory", Name extends Type extends "Hat" ? HatName : AccessoryName>(
    itemType: Type,
    HatName: Name
  ): MyPlayer;
  buy(itemType: "Accessory" | "Hat", AccessoryOrHatName: string): MyPlayer {
    if (!this.state.alive || !this.isInitialized) return this;

    const isAccessory = itemType == "Accessory";
    const item = (isAccessory ? getAccessory : getHat)(AccessoryOrHatName);

    if (!item) throw new Error(`Item Not Found ${AccessoryOrHatName} of type ${itemType}`);

    if (isAccessory && item.id == this.tailType) return this;
    if (!isAccessory && item.id == this.hatType) return this;

    if (item.price > this.resource.points) return this;

    if (this.#purchasedItems[itemType].includes(item.id)) return this;

    console.log("purchase", item);

    this.clientPacketOrganizer.buy(item.id, itemType).parseLast();
    return this;
  }

  /**
   * @description This packet is used to **equip** an `Accessory` or `Hat` in the game.
   * @ignored if you don't have that item yet. the packet will be ignored.
   * @param name - The name of the hat or accessory you want to equip.
   * @param itemType can be either `Accessory` or `Hat`.
   * @note If you haven't spawned in the game yet, this packet will be ignored.
   */
  equip<
    Type extends "Hat" | "Accessory",
    Name extends Type extends "Hat" ? HatName : AccessoryName
  >(itemType: Type, HatName: Name): MyPlayer;
  equip(itemType: "Accessory" | "Hat", AccessoryOrHatName: string): MyPlayer {
    if (!this.state.alive || !this.isInitialized) return this;

    const isAccessory = itemType == "Accessory";
    const item = (isAccessory ? getAccessory : getHat)(AccessoryOrHatName);

    if (!item) throw new Error(`Item Not Found ${AccessoryOrHatName} of type ${itemType}`);

    if (isAccessory && item.id == this.tailType) return this;
    if (!isAccessory && item.id == this.hatType) return this;

    if (!this.#purchasedItems[itemType].includes(item.id)) return this;

    this.clientPacketOrganizer.equip(item.id, itemType).parseLast();
    return this;
  }

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
  upgrade<Name extends GameItemName | WeaponName>(items: Name | Name[]): MyPlayer {
    if (items instanceof Array) {
      for (let itemName of items) {
        this.upgrade(itemName);
      }
      return this;
    }
    let item: { id: number; age: number } | undefined = getItem(items);
    const id = item ? item.id + 16 : (item = getWeapon(items))?.id ?? -1;

    const age = item?.age ?? -Infinity;

    if (
      this.#upgradeLevel - this.#currentUpgradeLevel == 0 ||
      age < this.#currentUpgradeLevel ||
      age > this.#upgradeLevel
    )
      return this;

    if (id == -1) throw new Error(`Item Not Found ${items}`);

    this.clientPacketOrganizer.upgrade(id).parseLast();
    return this;
  }

  /**
   * @description This packet is used to punch (hit) in the game
   * @param direction is the direction the player should face before updating the status (in radian).
   */
  punch(direction: number): MyPlayer {
    if (!this.state.alive || !this.isInitialized) return this;

    this.clientPacketOrganizer.setPunchState(true, direction).parseLast();
    this.clientPacketOrganizer.setPunchState(false, direction).parseLast();
    return this;
  }

  /**
   * @description this packet is used to toggle auto-punch
   * @notSafe true
   */
  autoPunch(state: boolean): MyPlayer {
    if (!this.state.alive || !this.isInitialized) return this;
    if (state == this.state.autoPunchState) return this;

    const oldState = this.state.autoPunchState;
    this.state.autoPunchState = state;
    this.clientPacketOrganizer
      .toggleAutoPunchState()
      .parseLast()
      .then((isSuccess) => {
        if (!isSuccess) this.state.autoPunchState = oldState;
      });

    return this;
  }

  /**
   * @description this packet is used to update your character direction in the game.
   * @param direction the direction your character is facing (in radian)
   *
   * @note this direction may be overwritten by `punch`
   */
  setDirection(direction: number): MyPlayer {
    if (!this.state.alive || !this.isInitialized) return this;

    this.clientPacketOrganizer.setDirection(direction).parseLast();
    return this;
  }

  /**
   * @description This packet is used to change the item held by your player.
   * @param name - The name of the weapon or item you want to hold.
   * @param itemType can be either `Weapon` or `Item`.
   */
  hold<
    Type extends "Weapon" | "Item",
    Name extends Type extends "Weapon" ? WeaponName : GameItemName
  >(itemType: Type, HatName: Name): MyPlayer;
  hold(itemType: "Weapon" | "Item", itemName: string): MyPlayer {
    if (!this.state.alive || !this.isInitialized) return this;

    const isWeapon = itemType == "Weapon";
    const item = (isWeapon ? getWeapon : getItem)(itemName);

    if (!item) throw new Error(`Item Not Found ${itemName} of type ${itemType}`);

    if (isWeapon && item.id == this.weaponType) return this;
    if (!isWeapon && item.id == this.buildType) return this;

    if (isWeapon && !this.#weaponKit.includes(item.id)) return this;
    if (!isWeapon && !this.#itemsKit.includes(item.id)) return this;

    const group = getGroup("group" in item ? item.group : -1);
    const ItemUsageCount = isWeapon ? -1 : this.#itemUsage.get(group?.id || -1);

    if (!isWeapon && group && group.limit <= ItemUsageCount!) return this;

    this.clientPacketOrganizer.holdItem(item.id, isWeapon).parseLast();
    return this;
  }

  /**
   * @description This function is used to perform an action of placing or using an item by the player in the game.
   * @param itemName The name of the item that the player wants to use or place.
   * @param backTo The item that the player should return to after completing the task.
   * @param direction The direction in which the player should place or use the item.
   */
  place(itemName: GameItemName, backTo: WeaponName, direction: number = this.angle): MyPlayer {
    if (!this.state.alive || !this.isInitialized) return this;
    this.hold("Item", itemName);
    this.punch(direction);
    this.hold("Weapon", backTo);

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
  createTeam(teamTitle: string): MyPlayer {
    if (!this.state.alive || !this.isInitialized) return this;
    if (typeof this.teamID == "string") return this;

    this.clientPacketOrganizer.createTeam(teamTitle).parseLast();
    return this;
  }

  /**
   *
   * @description this packet is used to **leave your current team.
   * @ignored If you are not in a team. this packet will be ignored.
   */
  leaveTeam(): MyPlayer {
    if (!this.state.alive || !this.isInitialized) return this;
    if (typeof this.teamID != "string") return this;

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
  joinRequest(teamTitle: string): MyPlayer {
    if (!this.state.alive || !this.isInitialized) return this;
    if (typeof this.teamID == "string") return this;

    this.clientPacketOrganizer.joinRequest(teamTitle).parseLast();
    return this;
  }

  // Getters & Setters:
  get currentAge() {
    return this.#currentAge;
  }

  get currentXP() {
    return this.#currentXP;
  }

  get maxXP() {
    return this.#maxXP;
  }

  get kit() {
    return [this.#weaponKit, this.#itemsKit];
  }
}
