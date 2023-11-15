import { GetArtistAlbumsResponse } from "index";
import Container from "./container";
import ArtistAlbumCard from "./artist-album-card";

export default function ArtistAlbumsList({ albums }: ArtistAlbumsProps) {
  if (!albums) return null;
  return (
    <Container className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
      {albums.map((album) => (
        <ArtistAlbumCard album={album} key={album.id} />
      ))}
    </Container>
  );
}

type ArtistAlbumsProps =
  | Pick<GetArtistAlbumsResponse, "albums">
  | { albums: null };
