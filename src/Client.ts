import querystring from 'querystring';
import fetch from 'isomorphic-fetch';

export const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export default class Client {
  private endpoint: string;
  private auth: string | null;

  constructor(endpoint: string, auth: string | null) {
    this.endpoint = endpoint;
    this.auth = auth;
  }

  formatQuery(queryString: {} = {}): string {
    const authQuery = this.auth ? { auth: this.auth } : {};

    return querystring.stringify({ ...authQuery, ...queryString });
  }

  url(path: string, queryString?: {}): string {
    const url = `${this.endpoint}${path}`;
    const query = this.formatQuery(queryString);

    return [url, query].filter(x => x).join('?');
  }

  async parseResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
      return <T>(await response.json());
    } else {
      throw Error(`Request failed: ${response.status} ${await response.text()}`);
    }
  }

  async get<T>(path: string, queryString?: {}) {
    const response = await fetch(this.url(path, queryString), { headers });

    return await this.parseResponse<T>(response);
  }

  async delete<T>(path: string, queryString?: {}) {
    const response = await fetch(this.url(path, queryString), { method: 'delete', headers });

    return await this.parseResponse<T>(response);
  }

  async post<T>(path: string, { body, queryString }: {
    queryString?: {},
    body?: {}
  }={}) {
    const response = await fetch(this.url(path, queryString), {
      headers,
      method: 'post',
      body: body ? JSON.stringify(body) : undefined,
    });

    return await this.parseResponse<T>(response);
  }
}
