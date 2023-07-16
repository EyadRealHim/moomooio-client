import { encode } from "msgpack-lite";
import MooMooIOConnection from "./MooMooIOConnection";

type Packet = readonly [string, unknown];

export default class ClientPacketOrganizer {
  #requestStack: Packet[] = [];

  constructor(readonly connection: MooMooIOConnection) {}

  destroy() {
    this.#requestStack = [];
  }

  /**
   * Generator function that reads and yields items from the request stack.
   * @returns An iterator for the items in the request stack.
   */
  protected *readRequestStack() {
    for (let item of this.#requestStack) {
      yield item;
    }
    // Reset the request stack after yielding all items
    this.#requestStack = [];
  }

  /**
   * Pushes a new request to the request stack.
   * @param {Packet} input - The request to be added to the stack.
   */
  protected requestStackPush(input: Packet): void {
    this.#requestStack.push(input);
  }

  protected async parse(packet: Packet): Promise<boolean> {
    return this.connection.send(encode(packet));
  }

  public async parseLast(): Promise<boolean> {
    const packet = this.#requestStack.pop();

    return !!packet && (await this.parse(packet));
  }

  public async parseRequestStack() {
    for (let packet of this.readRequestStack()) {
      await this.parse(packet);
    }
  }

  /**
   *
   * @description This packet is used to respond to a join request you received as the team owner. You can either `Accept` or `Deny` the request.
   * @ignored If you don't own the team, this packet will be ignored.
   * @param answer Either `Accept` or `Deny`.
   *
   * @note The response is based on the order in which the requests were received, with the oldest request being answered first.
   */

  answerJoinRequest(answer: "Accept" | "Deny") {
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
  buy(itemID: number, itemType: "Accessory" | "Hat") {
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
  createTeam(teamTitle: string) {
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
  equip(itemID: number, itemType: "Accessory" | "Hat") {
    this.requestStackPush(["13c", [0, itemID, itemType == "Accessory" ? 1 : 0]]);
    return this;
  }

  /**
   * @description This packet is used to change the item held by your player.
   * @param itemID A unique code that identifies the item.
   * @param isWeapon A method to categorize the type of item.
   */
  holdItem(itemID: number, isWeapon: boolean) {
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
  joinRequest(teamTitle: string) {
    this.requestStackPush(["10", [teamTitle]]);
    return this;
  }

  /**
   *
   * @description This packet is for removing someone from your team
   * @ignored If you are not the team owner. this packet will be ignored
   * @param playerID The ID of the player you want to kick from your team.
   */
  kickFromTeam(playerID: number) {
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
  ping(target: "MiniMap" | "Connection") {
    this.requestStackPush(target == "MiniMap" ? ["14", [1]] : ["pp", []]);
    return this;
  }

  /**
   * @description this packet is used to update your character direction in the game.
   * @param direction the direction your character is facing (in radian)
   *
   * @note this direction may be overwritten by `setPunchState`
   */
  setDirection(direction: number) {
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
  setPunchState(state: boolean, direction: number) {
    this.requestStackPush(["c", [state, direction]]);
    return this;
  }

  /**
   * @description This packet is used to create your character in the game.
   * @param name The name of your character.
   * @param skinID The skin ID of your character.
   * @param haveStartPackage Determines whether your character should start with a fast start-up package (having 100 resources for each resource).
   */
  spawn(name: string, skinID: number, haveStartPackage: boolean = true) {
    this.requestStackPush([
      "sp",
      [
        {
          moofoll: haveStartPackage,
          skin: skinID,
          name,
        },
      ],
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
  upgrade(itemID: number) {
    this.requestStackPush(["6", [itemID]]);
    return this;
  }
}
