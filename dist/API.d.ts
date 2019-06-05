import Client from "./Client";
import ContentAPI from "./Content";
import ContentSourceAPI from "./ContentSource";
import TeamAPI from "./Team";
import AuthAPI from "./Auth";
export declare type APIOptions = {
    endpoint: string;
    auth: string;
};
export default class API {
    readonly client: Client;
    readonly auth: AuthAPI;
    readonly content: ContentAPI;
    readonly team: TeamAPI;
    readonly contentSource: ContentSourceAPI;
    constructor({ endpoint, auth }: APIOptions);
}
