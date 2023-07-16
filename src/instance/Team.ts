interface TeamMember {
  readonly playerName: string;
  readonly playerID: number;
}

export default class Team {
  public membersList: TeamMember[] = [];

  constructor(readonly title: string, readonly ownerID: number) {}
}
