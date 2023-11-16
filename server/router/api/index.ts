import { Router } from "express";
import registerRequest from "../../middleware/register-request.ts";
import { validateSearch } from "../../middleware/validate-search.ts";
import { getArtistAlbums } from "../../controllers/get-artist-albums.ts";
import { getRequestsLogs } from "../../controllers/get-requests-logs.ts";

const apiRouter = Router();

apiRouter.get("/artist", validateSearch, registerRequest, getArtistAlbums);
apiRouter.get("/requests-logs", getRequestsLogs);

export { apiRouter };
