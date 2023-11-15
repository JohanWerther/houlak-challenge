import { RequestHandler } from "express";
import { AppError } from "../models/app-error.ts";
export const validateSearch: RequestHandler = (req, _res, next) => {
  const search = req.query.search;
  if (!search || typeof search !== "string") {
    return next(new AppError("A search must be provided", 400));
  } else next();
};
