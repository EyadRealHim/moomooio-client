import hats from "../data/hats";

type ReturnHat = (typeof hats)[number] | undefined;

export default function getHat(hatID: number): ReturnHat;
export default function getHat(hatName: string): ReturnHat;
export default function getHat(prop: PropertyKey, propValue: unknown): ReturnHat;
export default function getHat(
  IDOrNameOrProp: number | string | PropertyKey,
  propValue?: unknown
): ReturnHat {
  if (propValue !== undefined) return hats.find((hat) => (hat as any)[IDOrNameOrProp] == propValue);

  if (typeof IDOrNameOrProp == "string") return hats.find((hat) => hat.name == IDOrNameOrProp);
  if (typeof IDOrNameOrProp == "number") return hats.find((hat) => hat.id == IDOrNameOrProp);

  return undefined;
}
