import Client from "./Client";
import { Content } from "./types";

export type SuccessUploadResponse = {
  batchId: string,
  uploadCount: number,
  status: 'success',
};

export type ErrorUploadResponse = {
  errors: [{
    document: Content,
    error: string,
  }],
  totalDocs: number,
  errorDocs: number,
  message: string,
  status: 'error',
};

export type UploadResponse = SuccessUploadResponse | ErrorUploadResponse;

export default class ContentAPI {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async upload(documentType: number, batchId: string, items: Content[]): Promise<UploadResponse> {
    const response: UploadResponse = await this.client.post('/content/upload', {
      queryString: {
        documentType,
        batch: batchId,
      },
      body: {
        items: items.map(item => ({
          ...item,
          date: item.date.toISOString(),
        })),
      },
    });

    return response;
  }

  async deleteBatch(documentType: number, batchId: string): Promise<void> {
    await this.client.post('/content/delete', {
      queryString: {
        documentType,
        batch: batchId,
      },
      body: {},
    });
  }

  async deleteDocument(documentType: number, url: string): Promise<void> {
    await this.client.post('/content/delete', {
      queryString: {
        documentType,
      },
      body: {
        items: [{
          url,
        }]
      },
    });
  }
}