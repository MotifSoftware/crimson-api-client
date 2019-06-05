import Client from "./Client";
import { ContentSource, Entity } from "types";

export default class ContentSourceAPI {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async create({ name, description, team }: { name: string, description: string, team: number }): Promise<{
    contentSource: Entity<ContentSource>
  }> {
    return await this.client.post('/content/sources', { body: { teamid: team, name, description } });
  }

  async delete(documentType: number): Promise<void> {
    await this.client.delete('/content/sources', {
      documentType,
    });
  }

  async list(team: number): Promise<{
    contentSources: Entity<ContentSource>[],
  }> {
    return await this.client.get('/content/sources/list', { team });
  }
}