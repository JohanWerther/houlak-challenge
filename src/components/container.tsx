import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export default function Container({
  className,
  children,
  ...rest
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 2xl:px-0", className)} {...rest}>
      {children}
    </div>
  );
}
