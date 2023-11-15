import "dotenv/config";
import ViteExpress from "vite-express";
import cookieParser from "cookie-parser";
import express, { NextFunction, Request, Response } from "express";

import { AppError } from "./models/app-error.ts";
import { apiRouter } from "./router/api/index.ts";
import { authRouter } from "./router/auth/index.ts";
import { AxiosError } from "axios";
import { sequelize } from "./database/db.ts";

const app = express();
app.use(cookieParser());

app.use("/api", apiRouter);
app.use("/auth", authRouter);

app.use(
  <T extends Error>(
    err: T,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    if (process.env.NODE_ENV !== "production") {
      console.log({ err });
    }

    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ message: err.message });
    }

    if (err instanceof AxiosError) {
      return res
        .status(err?.status || err?.response?.status || 500)
        .json({ message: err.message });
    }
    res.status(500).json({ message: "Something went wrong" });
  }
);

sequelize
  .sync()
  .then(() => {
    console.log("Database sincronized");
    ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
  })
  .catch(() => {
    console.log("Could not init Database");
  });

process.on("SIGINT", () => {
  sequelize.close().catch(console.log);
});
