import catchAsync from "../utils/catch-async.ts";
import { RequestsLogs } from "../database/db.ts";

export default catchAsync(async function registerRequest(req, _res, next) {
  const search = req.query.search as string; // validado con validateSearch middleware
  try {
    await RequestsLogs.create({
      ipAddress: req.ip || "unknown",
      date: new Date(Date.now()),
      artist: search,
    });
    console.log("Request registered successfuly");
  } catch (err) {
    // no trancar la petición si algo falla
    // quizá enviar un reporte a un desarrollador, por ahora un console.log
    console.log("Could not create the request register");
  }
  return next();
});
