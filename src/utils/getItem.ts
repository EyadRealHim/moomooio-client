import items from "../data/items";

type ReturnItem = (typeof items)[number] | undefined;

export default function getItem(itemType: number): ReturnItem;
export default function getItem(itemID: number): ReturnItem;
export default function getItem(itemName: string): ReturnItem;
export default function getItem(prop: PropertyKey, propValue: unknown): ReturnItem;
export default function getItem(
  IDOrNameOrProp: number | string | PropertyKey,
  propValue?: unknown
): ReturnItem {
  if (propValue !== undefined)
    return items.find((item) => (item as any)[IDOrNameOrProp] == propValue);

  if (typeof IDOrNameOrProp == "string") return items.find((item) => item.name == IDOrNameOrProp);
  if (typeof IDOrNameOrProp == "number") {
    return items[IDOrNameOrProp] || items.find((item) => item.id == IDOrNameOrProp);
  }

  return undefined;
}
