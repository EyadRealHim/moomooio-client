import accessories from "../data/accessories";

type ReturnAccessory = (typeof accessories)[number] | undefined;

export default function getAccessory(AccessoryID: number): ReturnAccessory;
export default function getAccessory(AccessoryName: string): ReturnAccessory;
export default function getAccessory(prop: PropertyKey, propValue: unknown): ReturnAccessory;
export default function getAccessory(
  IDOrNameOrProp: number | string | PropertyKey,
  propValue?: unknown
): ReturnAccessory {
  if (propValue !== undefined)
    return accessories.find((accessory) => (accessory as any)[IDOrNameOrProp] == propValue);

  if (typeof IDOrNameOrProp == "string")
    return accessories.find((accessory) => accessory.name == IDOrNameOrProp);
  if (typeof IDOrNameOrProp == "number")
    return accessories.find((accessory) => accessory.id == IDOrNameOrProp);

  return undefined;
}
