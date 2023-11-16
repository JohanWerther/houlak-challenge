import useRequestsLogs from "@/lib/hooks/use-requests-logs";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { useEffect } from "react";
import RequestsLogsTable from "./requests-logs-table";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function RequestsLogsDialog({
  isOpen,
  onOpenChange,
}: RequestsLogsDialogProps) {
  const { getLogs, requestsLogs } = useRequestsLogs();

  useEffect(() => {
    if (isOpen) {
      getLogs().catch(console.error);
    }
  }, [isOpen]);
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Requests</AlertDialogTitle>
          <AlertDialogDescription>
            This should not be here
          </AlertDialogDescription>
        </AlertDialogHeader>
        <ScrollArea className="h-80">
          <RequestsLogsTable requestsLogs={requestsLogs} />
          <ScrollBar orientation="horizontal"/>
        </ScrollArea>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

type RequestsLogsDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};
