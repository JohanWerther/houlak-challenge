import { SimplifiedAlbum, Artist } from "@spotify/web-api-ts-sdk";

export type GetArtistAlbumsResponse = Artist & {
  albums: SimplifiedAlbum[];
};

export interface RequestsLogsFull {
  createdAt: string;
  updatedAt: string;
  ipAddress: string;
  date: Date;
  artist: string;
}
