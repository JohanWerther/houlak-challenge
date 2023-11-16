import catchAsync from "../utils/catch-async.ts";
import { AppError } from "../models/app-error.ts";
import { spotifyApi } from "../models/spotify-api.ts";

export const getArtistAlbums = catchAsync(async function (req, res, _next) {
  const search = req.query.search as string; // validado con validateSearch
  const artist = await getAristByName(search);
  const albums = await getArtistAlbumsById(artist.id);
  res.status(200).json({ ...artist, albums });
});

async function getAristByName(name: string) {
  const results = await spotifyApi.search(name, ["artist"]);
  if (results.artists.items.length === 0) throw new AppError("Not found", 404);
  return results.artists.items[0];
}

async function getArtistAlbumsById(artistId: string) {
  const results = await spotifyApi.artists.albums(artistId);
  return results.items;
}
