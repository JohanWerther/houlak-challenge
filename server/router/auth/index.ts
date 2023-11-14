import { Router } from "express";
import login from "./login.ts";
import callback from "./callback.ts";

const authRouter = Router();

authRouter.get("/login", login);
authRouter.get("/callback", callback);

export { authRouter };
