import querystring from "querystring";
import axios, { AxiosResponse } from "axios";
import catchAsync from "../../utils/catch-async.ts";
//import { AppError } from "../../models/app-error.ts";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
} from "../../config/config.ts";
import { CookieOptions } from "express";

const redirect_uri = "http://localhost:3000/auth/callback";
const client_id = process.env.SPOTIFY_CLIENT_ID || undefined;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET || undefined;
const stateKey = "spotify_auth_state";

export default catchAsync(async function loginCallback(req, res) {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    res.clearCookie(stateKey);

    let tokenResponse: AxiosResponse<GetTokenResponse>;
    try {
      tokenResponse = await axios.post<GetTokenResponse>(
        "https://accounts.spotify.com/api/token",
        {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: "authorization_code",
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              Buffer.from(client_id + ":" + client_secret).toString("base64"),
          },
        }
      );
    } catch (err) {
      return res.redirect(
        "/#" +
          querystring.stringify({
            error: "invalid_token",
          })
      );
    }

    const cookieOptions = {
      maxAge: tokenResponse.data.expires_in * 1000,
      sameSite: "lax",
      httpOnly: true,
      secure: true,
    } satisfies CookieOptions;

    res.cookie(
      ACCESS_TOKEN_COOKIE,
      tokenResponse.data.access_token,
      cookieOptions
    );
    res.cookie(
      REFRESH_TOKEN_COOKIE,
      tokenResponse.data.refresh_token,
      cookieOptions
    );

    res.cookie("is-logged-in", true, {
      maxAge: cookieOptions.maxAge,
      sameSite: cookieOptions.sameSite,
    });

    res.redirect("/");
  }
});

type GetTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
};
