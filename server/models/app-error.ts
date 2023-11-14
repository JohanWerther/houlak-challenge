export class AppError extends Error {
  status: "Fail" | "Error";
  statusCode: number;
  constructor(message = "Something went wrong", statusCode = 500) {
    super(message);
    this.status = `${statusCode}`.startsWith("4") ? "Fail" : "Error";
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}
