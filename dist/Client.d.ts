export declare const headers: {
    'Accept': string;
    'Content-Type': string;
};
export default class Client {
    private endpoint;
    constructor(endpoint: string);
    url(path: string, queryString?: {}): string;
    parseResponse<T>(response: Response): Promise<T>;
    get<T>(path: string, queryString?: {}): Promise<T>;
    delete<T>(path: string, queryString?: {}): Promise<T>;
    post<T>(path: string, { body, queryString }?: {
        queryString?: {};
        body?: {};
    }): Promise<T>;
}
