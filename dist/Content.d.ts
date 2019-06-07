import Client from "./Client";
import { Content } from "./types";
export declare type SuccessUploadResponse = {
    batchId: string;
    uploadCount: number;
    status: 'success';
};
export declare type ErrorUploadResponse = {
    errors: [{
        document: Content;
        error: string;
    }];
    totalDocs: number;
    errorDocs: number;
    message: string;
    status: 'error';
};
export declare type UploadResponse = SuccessUploadResponse | ErrorUploadResponse;
export default class ContentAPI {
    private client;
    constructor(client: Client);
    upload(documentType: number, batchId: string, items: Content[]): Promise<UploadResponse>;
    deleteBatch(documentType: number, batchId: string): Promise<void>;
    deleteDocument(documentType: number, url: string): Promise<void>;
}
