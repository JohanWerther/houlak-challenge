import { NextFunction, Request, RequestHandler, Response } from "express";

export default (controller: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> =>
    Promise.resolve(controller(req, res, next)).catch(next);
