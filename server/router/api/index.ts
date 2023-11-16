import { Router } from "express";
import { authMiddleware } from "../../middleware/auth-middleware.ts";
import { getArtistAlbums } from "./get-artist-albums.ts";
import { validateSearch } from "../../middleware/validate-search.ts";
import registerRequest from "../../middleware/register-request.ts";
import { getRequestsLogs } from "./get-requests-logs.ts";

const apiRouter = Router();

apiRouter.get(
  "/artist",
  authMiddleware,
  validateSearch,
  registerRequest,
  getArtistAlbums
);

apiRouter.get("/requests-logs", authMiddleware, getRequestsLogs);

export { apiRouter };
