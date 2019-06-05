import Client from "./Client";
import { Entity, Team } from "./types";
export default class TeamAPI {
    private client;
    constructor(client: Client);
    detail(id: number): Promise<Entity<Team> | null>;
    list(): Promise<{
        teams: Entity<Team>[];
    }>;
}
