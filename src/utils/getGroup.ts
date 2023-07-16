import groups from "../data/groups";

type ReturnGroup = (typeof groups)[number] | undefined;

export default function getGroup(groupName: string): ReturnGroup;
export default function getGroup(groupID: number): ReturnGroup;
export default function getGroup(groupIDOrName: number | string): ReturnGroup {
  if (typeof groupIDOrName == "string") return groups.find((group) => group.name == groupIDOrName);
  else {
    return groups.find((group) => group.id == groupIDOrName);
  }
}
