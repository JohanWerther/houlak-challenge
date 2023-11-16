import "dotenv/config";
import express from "express";
import ViteExpress from "vite-express";
import cookieParser from "cookie-parser";

import type http from "http";
import type { NextFunction, Request, Response } from "express";

import { AxiosError } from "axios";
import { AppError } from "./models/app-error.ts";
import { apiRouter } from "./router/api/index.ts";
import { authRouter } from "./router/auth/index.ts";
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

let server: http.Server;

sequelize
  .sync()
  .then(() => {
    console.log("Database sincronized");
    server = ViteExpress.listen(app, 3000, () =>
      console.log("Server is listening http://localhost:3000")
    );
  })
  .catch(() => {
    console.log("Could not init Database");
    process.exit(1);
  });

function handleShutdown() {
  sequelize.close().catch(console.log);
  if (server) {
    server.close(() => {
      console.log("Server closed. Exiting process.");
      process.exit(0);
    });
  }
}

process.on("SIGINT", handleShutdown);
process.on("SIGTERM", handleShutdown);
