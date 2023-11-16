import { SimplifiedAlbumObject } from "index";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export default function ArtistAlbumCard({ album }: ArtistAlbumCardProps) {
  return (
    <article className="group rounded-lg overflow-hidden  dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 px-4 pt-4 transition-colors  duration-300">
      <div className="relative rounded-xl  overflow-hidden group-hover:drop-shadow-lg">
        <img
          src={album.images.at(-2)?.url || album.images.at(0)?.url}
          alt={album.name}
        />

        <Button
          asChild
          size="icon"
          className="absolute bottom-4 right-4 translate-y-2 transition-all opacity-0 group-hover:translate-y-0 group-hover:opacity-100
          focus:translate-y-0 focus:opacity-100"
        >
          <a href={album.external_urls["spotify"]} target="_blank">
            <ExternalLink />
          </a>
        </Button>
      </div>
      <div className="py-4">
        <h3 className="font-medium line-clamp-1">{album.name}</h3>
        <p className="text-stone-700 dark:text-stone-400 line-clamp-2">
          {album.release_date.substring(0, 4)} • {album.artists[0].name}
        </p>
      </div>
    </article>
  );
}

type ArtistAlbumCardProps = { album: SimplifiedAlbumObject };
