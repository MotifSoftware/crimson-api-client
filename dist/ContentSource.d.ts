import Client from "./Client";
import { ContentSource, Entity } from "types";
export default class ContentSourceAPI {
    private client;
    constructor(client: Client);
    create({ name, description, team }: {
        name: string;
        description: string;
        team: number;
    }): Promise<{
        contentSource: Entity<ContentSource>;
    }>;
    delete(documentType: number): Promise<void>;
    list(team: number): Promise<{
        contentSources: Entity<ContentSource>[];
    }>;
}
