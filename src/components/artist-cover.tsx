import Container from "./container";
import { Button } from "./ui/button";
import type { GetArtistAlbumsResponse } from "index";

export default function ArtistCover({ artist }: ArtistCoverProps) {
  if (!artist) return null;

  return (
    <div className="relative bg-gradient-to-t dark:from-background from-black to-40% h-[500px] flex">
      <div
        className={`absolute h-full w-full -z-10 bg-center bg-no-repeat bg-cover`}
        style={{
          backgroundImage: artist.images[0]?.url
            ? `url(${artist.images[0].url})`
            : undefined,
        }}
      />
      <Container className="self-end w-full py-8">
        <h2 className="text-3xl font-bold text-white">{artist.name}</h2>

        <Button asChild className="mt-2 ps-0" variant="link">
          <a href={artist.external_urls["spotify"]} target="_blank">
            Ver en Spotify
          </a>
        </Button>
      </Container>
    </div>
  );
}

type ArtistCoverProps = { artist: GetArtistAlbumsResponse | null };
