import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

export default function RequestsLogsDialog({
  isOpen,
  onOpenChange,
}: RequestsLogsDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Requests</AlertDialogTitle>
          <AlertDialogDescription>
            Here we will show the list of requests made by the client
          </AlertDialogDescription>
        </AlertDialogHeader>
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
