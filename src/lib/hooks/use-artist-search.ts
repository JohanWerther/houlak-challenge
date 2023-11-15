import { useState } from "react";
import type { GetArtistAlbumsResponse } from "../../../index";
import { HttpError } from "../utils";

export default function useArtistSearch(): UseSearchArtistReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [artistData, setArtistData] = useState<GetArtistAlbumsResponse | null>(
    null
  );

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
    setArtistData(data);
  };

  return {
    getArtistAlbums,
    isLoading,
    artistData,
  };
}

export type UseSearchArtistReturn = {
  getArtistAlbums: (search: URLSearchParams) => Promise<void>;
  isLoading: boolean;
  artistData: GetArtistAlbumsResponse | null;
};
