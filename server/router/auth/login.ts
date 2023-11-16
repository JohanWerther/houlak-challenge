import querystring from "querystring";
import crypto from "crypto";
import catchAsync from "../../utils/catch-async.ts";
import {
  AUTH_STATE_KEY,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_REDIRECT_URI,
} from "../../config/config.ts";

const generateRandomString = (length = 16) => {
  return crypto.randomBytes(60).toString("hex").slice(0, length);
};

export default catchAsync(function getSpotifyToken(_, res) {
  const state = generateRandomString(16);
  res.cookie(AUTH_STATE_KEY, state);
  const scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: SPOTIFY_REDIRECT_URI,
        state: state,
        show_dialog: true,
      })
  );
});
