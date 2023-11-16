import { GetArtistAlbumsResponse } from "index";
import Container from "./container";
import ArtistAlbumCard from "./artist-album-card";

export default function ArtistAlbumsList({ albums }: ArtistAlbumsProps) {
  if (!albums) return null;
  return (
    <Container className="my-8" id="albums">
      <h2 className="mb-4 font-bold">Albums</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {albums.map((album) => (
          <ArtistAlbumCard album={album} key={album.id} />
        ))}
      </div>
    </Container>
  );
}

type ArtistAlbumsProps =
  | Pick<GetArtistAlbumsResponse, "albums">
  | { albums: null };
