import { useState } from "react";
import type { GetArtistAlbumsResponse } from "../../../index";

export default function useArtistSearch(): UseSearchArtistReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [artistAlbums, setArtistAlbums] =
    useState<GetArtistAlbumsResponse | null>(null);

  const getArtistAlbums: UseSearchArtistReturn["getArtistAlbums"] = async (
    search
  ) => {
    setIsLoading(true);
    const res = await fetch("/api/artist?" + search).finally(() =>
      setIsLoading(false)
    );
    if (res.status !== 200)
      throw new Error("The server response with a satuts code: " + res.status);
    const data = await res.json();
    setArtistAlbums(data);
  };

  return {
    getArtistAlbums,
    isLoading,
    artistAlbums,
  };
}

export type UseSearchArtistReturn = {
  getArtistAlbums: (search: URLSearchParams) => void;
  isLoading: boolean;
  artistAlbums: GetArtistAlbumsResponse | null;
};
