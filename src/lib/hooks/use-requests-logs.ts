import { RequestsLogsFull } from "index";
import { useState } from "react";
import { HttpError } from "../utils";

export default function useRequestsLogs() {
  const [requestsLogs, setRequestsLogs] = useState<RequestsLogsFull[]>([]);

  const getLogs = async () => {
    const res = await fetch("/api/requests-logs");
    if (!res.ok) {
      throw new HttpError("Could not get requests logs", res.status);
    }

    const data: RequestsLogsFull[] = (await res.json()).results;
    setRequestsLogs(data);
  };

  return { getLogs, requestsLogs };
}

export type UseRequestsLogsReturn = ReturnType<typeof useRequestsLogs>
