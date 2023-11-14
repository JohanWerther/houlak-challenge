import { Router } from "express";
import { authMiddleware } from "../../middleware/auth-middleware.ts";
import { getArtistAlbums } from "./get-artist-albums.ts";

const apiRouter = Router();

apiRouter.get("/artist", authMiddleware, getArtistAlbums);

export { apiRouter };
