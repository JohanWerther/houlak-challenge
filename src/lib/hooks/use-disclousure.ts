import { useState } from "react";

export default function useDisclousure() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return {
    open,
    close,
    toggle,
    isOpen,
  };
}
