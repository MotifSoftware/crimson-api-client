import Client from "./Client";

export type Gender = 'M' | 'F';

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

type LoginResponse = {
  auth: string,
  expires: string,
};

export default class AuthAPI {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async login(username: string, password: string, force: boolean = true, noExpiration: boolean = true): Promise<{
    auth: string,
    expires: Date,
  }> {
    const response: LoginResponse = await this.client.post('/authenticate', {
      queryString: {
        username,
        password,
        force,
        noExpiration,
      },
    });

    return {
      auth: response.auth,
      expires: new Date(Date.parse(response.expires)),
    };
  }
}