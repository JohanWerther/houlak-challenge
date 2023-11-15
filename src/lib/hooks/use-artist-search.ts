import { useState } from "react";
import type { GetArtistAlbumsResponse } from "../../../index";
import { HttpError } from "../utils";

export default function useArtistSearch(): UseSearchArtistReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [artistData, setArtistData] = useState<GetArtistAlbumsResponse | null>(
    null
  );
  const [didSearch, setDidSearch] = useState(false);

  const getArtistAlbums: UseSearchArtistReturn["getArtistAlbums"] = async (
    search
  ) => {
    setIsLoading(true);
    const res = await fetch("/api/artist?" + search).finally(() =>
      setIsLoading(false)
    );
    if (res.status !== 200)
      throw new HttpError("Failed to get artist's albums", res.status);
    const data = await res.json();
    setDidSearch(true);
    setArtistData(data);
  };

  return {
    getArtistAlbums,
    isLoading,
    artistData,
    didSearch,
  };
}

export type UseSearchArtistReturn = {
  getArtistAlbums: (search: URLSearchParams) => Promise<void>;
  isLoading: boolean;
  artistData: GetArtistAlbumsResponse | null;
  didSearch: boolean;
};
