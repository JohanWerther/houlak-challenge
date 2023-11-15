import { SimplifiedAlbumObject } from "index";

export default function ArtistAlbumCard({ album }: ArtistAlbumCardProps) {
  return (
    <article className="rounded-lg overflow-hidden dark:bg-slate-900 px-4 pt-4">
      <img src={album.images[0].url} alt={album.name} className="rounded-xl" />
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
