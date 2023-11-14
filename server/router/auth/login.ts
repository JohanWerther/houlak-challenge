import querystring from "querystring";
import crypto from "crypto";
import catchAsync from "../../utils/catch-async.ts";

const redirect_uri = "http://localhost:3000/auth/callback";
const client_id = process.env.SPOTIFY_CLIENT_ID || undefined;

const stateKey = "spotify_auth_state";

const generateRandomString = (length = 16) => {
  return crypto.randomBytes(60).toString("hex").slice(0, length);
};

export default catchAsync(function getSpotifyToken(_, res) {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);
  const scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
        show_dialog: true,
      })
  );
});
