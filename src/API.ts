import Client from "./Client";
import ContentAPI from "./Content";
import ContentSourceAPI from "./ContentSource";
import TeamAPI from "./Team";
import AuthAPI from "./Auth";

export default class API {
  public readonly client: Client;
  public readonly auth: AuthAPI;
  public readonly content: ContentAPI;
  public readonly team: TeamAPI;
  public readonly contentSource: ContentSourceAPI;

  constructor(endpoint: string) {
    this.client = new Client(endpoint);

    this.auth = new AuthAPI(this.client);
    this.content = new ContentAPI(this.client);
    this.team = new TeamAPI(this.client);
    this.contentSource = new ContentSourceAPI(this.client);
  }
}