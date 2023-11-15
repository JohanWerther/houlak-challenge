import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class HttpError extends Error {
  statusCode: number;
  constructor(message: string, status: number) {
    super(message);
    this.statusCode = status;
  }
}
