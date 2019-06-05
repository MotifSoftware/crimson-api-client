export type Entity<T> = T & {
  id: number,
};

export type Team = {
  name: string,
};

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

export interface ContentSource {
  teamName: string;
  name?: string;
  description: string;
  documents: number;
}
