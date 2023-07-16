import aiTypes from "../data/aiTypes";

type ReturnAIType = (typeof aiTypes)[number] | undefined;

export default function getAIType(aiID: number): ReturnAIType;
export default function getAIType(aiName: string): ReturnAIType;
export default function getAIType(prop: PropertyKey, propValue: unknown): ReturnAIType;
export default function getAIType(
  IDOrNameOrProp: number | string | PropertyKey,
  propValue?: unknown
): ReturnAIType {
  if (propValue !== undefined)
    return aiTypes.find((ai) => (ai as any)[IDOrNameOrProp] == propValue);

  if (typeof IDOrNameOrProp == "string") return aiTypes.find((ai) => ai.name == IDOrNameOrProp);
  if (typeof IDOrNameOrProp == "number") return aiTypes.find((ai) => ai.id == IDOrNameOrProp);

  return undefined;
}
