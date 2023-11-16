import React from "react";
import type { PropsWithChildren, ReactNode } from "react";

/**
 * Basado en docs de legado
 * @see https://legacy.reactjs.org/docs/error-boundaries.html
 */
export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError<T extends Error>(error: T) {
    if (import.meta.env.MODE === "development") {
      console.error(error);
    }
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

type ErrorBoundaryProps = PropsWithChildren<{ fallback: ReactNode }>;
