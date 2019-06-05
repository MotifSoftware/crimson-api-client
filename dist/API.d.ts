import Client from "./Client";
import ContentAPI from "./Content";
import ContentSourceAPI from "./ContentSource";
import AuthAPI from "./Auth";
export default class API {
    readonly client: Client;
    readonly auth: AuthAPI;
    readonly content: ContentAPI;
    readonly contentSource: ContentSourceAPI;
    constructor(endpoint: string);
}
