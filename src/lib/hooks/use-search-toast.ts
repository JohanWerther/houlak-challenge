import { useToast } from "./use-toast";
import { HttpError } from "../utils";

export default function useSearchToast() {
  const { toast } = useToast();

  const handleError = <T extends Error>(err: T) => {
    const variant = "destructive";
    let title = "Something went wrong";
    if (err instanceof HttpError) {
      if (err.statusCode === 400) title = "Bad request";
      if (err.statusCode === 401) title = "Unauthorized";
      if (err.statusCode === 403) title = "Forbidden";
      if (err.statusCode === 404) title = "Artist not found";

      return toast({
        variant,
        title,
      });
    }
    return toast({
      variant,
      title: "Something went wrong",
    });
  };

  return {
    handleError,
  };
}
