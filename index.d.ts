export type GetArtistAlbumsResponse = SingleArtist & {
  albums: SimplifiedAlbumObject[];
};

export interface SingleArtist {
  external_urls: Record<string, string>;
  followers: Record<string, string | number | null>;
  genres: string[];
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export type SimplifiedArtist = Pick<
  SingleArtist,
  "external_urls" | "href" | "id" | "name" | "type" | "uri"
>;

export interface SimplifiedAlbumObject {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: Record<string, string>;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: { reason: string };
  type: string;
  uri: string;
  artists: SimplifiedArtist[];
  album_group: string;
}

export interface ImageObject {
  url: string;
  height: number | null;
  width: number | null;
}
