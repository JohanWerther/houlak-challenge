import { cn } from "@/lib/utils";
import Container from "./container";
import { ModeToggle } from "./mode-toggler";
import type { HTMLAttributes, PropsWithChildren } from "react";
import useAuth from "@/lib/hooks/use-auth";
import { Button } from "./ui/button";

export default function Header({
  className,
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  const { isLoggedIn } = useAuth();
  return (
    <header
      className={cn(
        "border border-b sticky z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 top-0",
        className
      )}
      {...rest}
    >
      <Container className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-3 py-4 items-center gap-2 md:gap-0">
        <div className="flex items-center gap-2">
          <img src="houlak.svg" alt="houlak logo" className="w-4 h-4" />
          <h1 className="hidden sm:block flex-shrink-0">Challenge</h1>
        </div>
        <>{children}</>
        <div className="ms-auto flex items-center col-start-3">
          {!isLoggedIn ? (
            <Button asChild className="mr-2">
              <a href="/auth/login" className="leading-4">
                Login
              </a>
            </Button>
          ) : null}
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
}
