import { Database } from "lucide-react";
import { Button } from "./ui/button";

export default function RequestsLogsFAB({
  onClick,
}: Pick<React.HTMLAttributes<HTMLButtonElement>, "onClick">) {
  return (
    <div className="fixed bottom-4 right-4">
      <Button size="icon" onClick={onClick}>
        <Database />
      </Button>
    </div>
  );
}
