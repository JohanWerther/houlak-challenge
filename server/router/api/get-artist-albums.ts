import axios, { AxiosError } from "axios";
import catchAsync from "../../utils/catch-async.ts";
import querystring from "querystring";
import { AppError } from "../../models/app-error.ts";
import { ACCESS_TOKEN_COOKIE } from "../../config/config.ts";
import type {
  GetArtistAlbumsResponse,
  SimplifiedAlbumObject,
  SingleArtist,
} from "../../../index";

export const getArtistAlbums = catchAsync(async function (req, res, _next) {
  const accessToken = req.cookies[ACCESS_TOKEN_COOKIE] as string;
  const search = req.query.search as string | undefined;
  if (!search) throw new AppError("A search must be provided", 400);
  const artist = await getAristByName(search, accessToken);
  const albums = await getArtistAlbumsById(artist.id, accessToken);
  res.status(200).json({ ...artist, albums } satisfies GetArtistAlbumsResponse);
});

async function getAristByName(name: string, accessToken: string) {
  const url =
    "https://api.spotify.com/v1/search?" +
    querystring.stringify({ q: name }) +
    "&" +
    new URLSearchParams({ type: "artist" });

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });

    if (response.data.artist?.length === 0)
      throw new AppError("Not found", 404);
    return response.data.artists.items[0] as SingleArtist;
  } catch (err) {
    console.log(err);
    if (err instanceof AxiosError) {
      throw new AppError(
        `Spotify response with a status of ${err.status}`,
        err.status
      );
    } else throw new Error((err as Error).message);
  }
}

async function getArtistAlbumsById(artistId: string, accessToken: string) {
  const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
  try {
    const response = await axios.get(url, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    console.log(response.data);
    return response.data.items as SimplifiedAlbumObject[];
  } catch (err) {
    console.log(err);
    throw err;
  }
}
