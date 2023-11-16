import "dotenv/config";
import express from "express";
import ViteExpress from "vite-express";
import cookieParser from "cookie-parser";

import type http from "http";
import { apiRouter } from "./router/api/index.ts";
import { sequelize } from "./database/db.ts";
import errorHandler from "./controllers/error-handler.ts";

const app = express();
app.use(cookieParser());

app.use("/api", apiRouter);
app.use(errorHandler);

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
