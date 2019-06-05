import Client from "./Client";
export declare type Gender = 'M' | 'F';
export interface Content {
    title: string;
    date: Date;
    author: string;
    url: string;
    contents: string;
    language: string;
    type: string;
    gender?: Gender;
    age?: number;
    geolocation?: {
        id: string;
        latitude: number;
        longitude: number;
        zipcode: string;
    };
    requestUsage?: boolean;
}
export default class AuthAPI {
    private client;
    constructor(client: Client);
    login(username: string, password: string, force?: boolean, noExpiration?: boolean): Promise<{
        auth: string;
        expires: Date;
    }>;
}
