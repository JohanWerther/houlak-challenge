import type { RequestHandler } from "express";
import { ACCESS_TOKEN_COOKIE } from "../config/config.ts";
import { AppError } from "../models/app-error.ts";

export const authMiddleware: RequestHandler = (req, _res, next) => {
  const accessToken = req.cookies[ACCESS_TOKEN_COOKIE];
  if (!accessToken) {
    return next(new AppError("Unauthorized: missing token", 401));
  } else {
    next();
  }
};
