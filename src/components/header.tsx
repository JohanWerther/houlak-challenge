import { cn } from "@/lib/utils";
import Container from "./container";
import { ModeToggle } from "./mode-toggler";
import type { HTMLAttributes, PropsWithChildren } from "react";

export default function Header({
  className,
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <header
      className={cn("border border-b-primary-foreground", className)}
      {...rest}
    >
      <Container className="flex justify-between py-4 items-center gap-2 md:gap-0">
        <h1 className="flex-shrink-0">Houlak Challange</h1>
        <>{children}</>
        <ModeToggle />
      </Container>
    </header>
  );
}
