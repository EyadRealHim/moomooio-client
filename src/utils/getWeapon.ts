import weapons from "../data/weapons";

type ReturnWeapon = (typeof weapons)[number] | undefined;

export default function getWeapon(weaponID: number): ReturnWeapon;
export default function getWeapon(weaponName: string): ReturnWeapon;
export default function getWeapon(prop: PropertyKey, propValue: unknown): ReturnWeapon;
export default function getWeapon(
  IDOrNameOrProp: number | string | PropertyKey,
  propValue?: unknown
): ReturnWeapon {
  if (propValue !== undefined)
    return weapons.find((weapon) => (weapon as any)[IDOrNameOrProp] == propValue);

  if (typeof IDOrNameOrProp == "string")
    return weapons.find((weapon) => weapon.name == IDOrNameOrProp);
  if (typeof IDOrNameOrProp == "number")
    return weapons.find((weapon) => weapon.id == IDOrNameOrProp);

  return undefined;
}
