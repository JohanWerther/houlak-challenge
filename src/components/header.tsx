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
      className={cn(
        "border border-b sticky z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 top-0",
        className
      )}
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
