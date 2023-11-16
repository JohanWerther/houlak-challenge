import { AppError } from "../models/app-error.ts";
import { NextFunction, Request, Response } from "express";

export default function errorHandler<T extends Error>(
  err: T,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (process.env.NODE_ENV !== "production") {
    console.log({ err });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  // NEED TO HANDLE SPOTIFY ERRORS HERE OR ON ANOTHER ERROR MIDDLEWARE

  res.status(500).json({ message: "Something went wrong" });
}
