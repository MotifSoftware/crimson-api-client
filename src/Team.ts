import Client from "./Client";
import { Entity, Team } from "./types";

export default class TeamAPI {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async detail(id: number): Promise<Entity<Team> | null> {
    const { teams } = await this.list();

    const matchedTeams = teams.filter(team => team.id === id);

    return matchedTeams.length > 0 ? matchedTeams[0] : null;
  }

  async list(): Promise<{
    teams: Entity<Team>[],
  }> {
    return await this.client.get('/team/list');
  }
}