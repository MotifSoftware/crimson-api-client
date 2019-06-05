import Client from "./Client";
import { Content } from "./types";

export default class ContentAPI {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async upload(documentType: number, batchId: string, items: Content[]): Promise<void> {
    await this.client.post('/content/upload', {
      queryString: {
        documentType,
        batchId,
      },
      body: {
        items: items.map(item => ({
          ...item,
          date: item.date.toISOString(),
        })),
      },
    });
  }

  async deleteBatch(documentType: number, batchId: string): Promise<void> {
    await this.client.post('/content/delete', {
      queryString: {
        documentType,
        batchId,
      },
    });
  }

  async deleteDocument(documentType: number, url: string): Promise<void> {
    await this.client.post('/content/delete', {
      queryString: {
        documentType,
        url,
      },
    });
  }
}