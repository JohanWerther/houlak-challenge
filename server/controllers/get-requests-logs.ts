import { RequestsLogs } from "../database/db.ts";
import catchAsync from "../utils/catch-async.ts";

export const getRequestsLogs = catchAsync(async function (_req, res, _next) {
  const results = await RequestsLogs.findAll();
  return res.json({ results });
});
