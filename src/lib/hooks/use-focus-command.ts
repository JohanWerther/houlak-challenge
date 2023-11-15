import { useEffect, useRef } from "react";

export default function useFocusCommand() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focusInput = ({ key, metaKey, ctrlKey }: KeyboardEvent) => {
      if (inputRef.current && key === "k" && (metaKey || ctrlKey)) {
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", focusInput);

    () => {
      window.removeEventListener("keydown", focusInput);
    };
  }, []);

  return { inputRef };
}
