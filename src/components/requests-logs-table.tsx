import { UseRequestsLogsReturn } from "@/lib/hooks/use-requests-logs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function RequestsLogsTable({
  requestsLogs,
}: RequestsLogsTableProps) {
  return (
    <Table className="rounded">
      <TableHeader className="sticky top-0">
        <TableRow>
          <TableHead>{/* index */}</TableHead>
          <TableHead>ip (v6)</TableHead>
          <TableHead>artist (input)</TableHead>
          <TableHead>date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requestsLogs.map((log, i) => (
          <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{log.ipAddress}</TableCell>
            <TableCell>{log.artist}</TableCell>
            <TableCell>{log.date.toString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

type RequestsLogsTableProps = Pick<UseRequestsLogsReturn, "requestsLogs">;
