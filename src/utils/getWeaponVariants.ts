import weaponVariants from "../data/weaponVariants";

export default function getWeaponVariants(id: number) {
  return weaponVariants.find((e) => id == e.id);
}
