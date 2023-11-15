import { Database } from "lucide-react";
import { Button } from "./ui/button";
import useAuth from "@/lib/hooks/use-auth";

export default function RequestsLogsFAB({
  onClick,
}: Pick<React.HTMLAttributes<HTMLButtonElement>, "onClick">) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) return null;

  return (
    <div className="fixed bottom-4 right-4">
      <Button size="icon" onClick={onClick}>
        <Database />
      </Button>
    </div>
  );
}
