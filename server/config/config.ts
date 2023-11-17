// spotify api config
export const SPOTIFY_CLIENT_ID =
  process.env?.SPOTIFY_CLIENT_ID || "bdda44d2b2714e07bd5506d43794e561";
export const SPOTIFY_CLIENT_SECRET =
  process.env?.SPOTIFY_CLIENT_SECRET || "017e87cc4e3c46359ffe7db5bce6ceaa";
export const SPOTIFY_REDIRECT_URI = "http://localhost:3000/auth/callback";
