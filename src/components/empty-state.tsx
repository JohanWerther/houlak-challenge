import { Button } from "./ui/button";

export default function EmptyState() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div>
        <Title />
        <img src="empty.svg" className="w-96 h-96" />
      </div>
    </div>
  );
}

function Title() {
  const focusInput = () => {
    // just in case, should not fail
    try {
      const input: HTMLInputElement | null = document.querySelector("#search");
      input?.focus();
    } catch {}
  };

  return (
    <h1 className="text-center font-bold uppercase">
      Start by{" "}
      <Button
        variant="link"
        className="p-0 text-[inherit] uppercase font-bold text-md"
        onClick={focusInput}
      >
        searching something
      </Button>
    </h1>
  );
}
