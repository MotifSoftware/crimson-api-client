import Client from "./Client";
import { Content } from "./types";
export default class ContentAPI {
    private client;
    constructor(client: Client);
    upload(documentType: number, batchId: string, items: Content[]): Promise<void>;
    delete(documentType: number, batchId?: string): Promise<void>;
}
