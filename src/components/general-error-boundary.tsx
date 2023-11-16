import { PropsWithChildren } from "react";
import Container from "./container";
import ErrorBoundary from "./error-boundary";
import { cn } from "@/lib/utils";

export default function GeneralErrorBoundary({
  children,
  className,
  ...rest
}: PropsWithChildren<PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>>) {
  return (
    <ErrorBoundary
      fallback={
        <Container className={cn("py-8", className)} {...rest}>
          <h2 className="font-bold text-lg">
            There is an error <br />
          </h2>
          Here should be something to recover from errors. I would probably do
          this more granular
        </Container>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
