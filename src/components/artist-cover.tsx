import Container from "./container";
import { Button } from "./ui/button";
import type { GetArtistAlbumsResponse } from "index";

export default function ArtistCover({ artist }: ArtistCoverProps) {
  if (!artist) return null;

  return (
    <div className="relative bg-gradient-to-t dark:from-background from-black to-40% h-[500px] xl:h-auto flex xl:bg-none">
      <Container className="self-end w-full py-8 xl:flex xl:items-end xl:gap-8">
        <div
          className={`absolute top-0 left-0 h-full w-full -z-10 bg-center bg-no-repeat bg-cover xl:static xl:z-0 xl:rounded-full xl:h-72 xl:w-72`}
          style={{
            backgroundImage: artist.images[0]?.url
              ? `url(${artist.images[0].url})`
              : undefined,
          }}
        />
        <div>
          <h2 className="text-3xl font-bold text-white xl:text-foreground xl:text-7xl">
            {artist.name}
          </h2>

          <Button asChild className="mt-3">
            <a href={artist.external_urls["spotify"]} target="_blank">
              Go to Spotify
            </a>
          </Button>
        </div>
      </Container>
    </div>
  );
}

type ArtistCoverProps = { artist: GetArtistAlbumsResponse | null };
