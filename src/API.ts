import Client from "./Client";
import ContentAPI from "./Content";
import ContentSourceAPI from "./ContentSource";
import TeamAPI from "./Team";
import AuthAPI from "./Auth";

export type APIOptions = {
  endpoint: string,
  auth: string,
};

export default class API {
  public readonly client: Client;
  public readonly auth: AuthAPI;
  public readonly content: ContentAPI;
  public readonly team: TeamAPI;
  public readonly contentSource: ContentSourceAPI;

  constructor({ endpoint, auth }: APIOptions) {
    this.client = new Client(endpoint || 'https://api.crimsonhexagon.com/api', auth);

    this.auth = new AuthAPI(this.client);
    this.content = new ContentAPI(this.client);
    this.team = new TeamAPI(this.client);
    this.contentSource = new ContentSourceAPI(this.client);
  }
}