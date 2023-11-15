import axios from "axios";
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

  const response = await axios.get(url, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });

  if (response.data.artists?.items.length === 0)
    throw new AppError("Not found", 404);
  console.log(response.data.artists.items[0].images)
  return response.data.artists.items[0] as SingleArtist;
}

async function getArtistAlbumsById(artistId: string, accessToken: string) {
  const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;

  const response = await axios.get(url, {
    headers: { Authorization: "Bearer " + accessToken },
  });

  return response.data.items as SimplifiedAlbumObject[];
}
