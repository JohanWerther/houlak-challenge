import Container from "./container";
import { Button } from "./ui/button";
import type { GetArtistAlbumsResponse } from "index";

export default function ArtistCover({ artist }: ArtistCoverProps) {
  if (!artist) return null;

  return (
    <div className="relative bg-gradient-to-t from-black to-40% h-[500px] flex">
      <div
        className={`absolute h-full w-full -z-10 bg-center bg-no-repeat bg-cover`}
        style={{
          backgroundImage: `url(${artist.images[0].url})`,
        }}
      />
      <Container className="self-end w-full py-8">
        <h2 className="text-3xl font-bold text-white">{artist.name}</h2>

        <Button asChild className="mt-2">
          <a href={artist.external_urls["spotify"]} target="_blank">
            Ver en Spotify
          </a>
        </Button>
      </Container>
    </div>
  );
}

type ArtistCoverProps = { artist: GetArtistAlbumsResponse | null };
