// cookies keys
export const ACCESS_TOKEN_COOKIE = "hc-spotify-access-token";
export const REFRESH_TOKEN_COOKIE = "hc-spotify-refresh-token";
export const AUTH_STATE_KEY = "spotify_auth_state";

// spotify api config
export const SPOTIFY_CLIENT_ID =
  process.env?.SPOTIFY_CLIENT_ID || "bdda44d2b2714e07bd5506d43794e561";
export const SPOTIFY_CLIENT_SECRET =
  process.env?.SPOTIFY_CLIENT_SECRET || "017e87cc4e3c46359ffe7db5bce6ceaa";
export const SPOTIFY_REDIRECT_URI = "http://localhost:3000/auth/callback";
