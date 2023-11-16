import { UseSearchArtistReturn } from "@/lib/hooks/use-artist-search";
import { Input } from "./ui/input";
import { ArrowUp, Command, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import useSearchToast from "@/lib/hooks/use-search-toast";
import useFocusCommand from "@/lib/hooks/use-focus-command";

export default function Search({
  onSubmit: getArtistAlbums,
  isLoading,
}: SearchProps) {
  const { handleError } = useSearchToast();
  const { inputRef } = useFocusCommand();

  const handleSubmit = async (e: React.FormEvent<SearchFormElement>) => {
    e.preventDefault();
    const search = new URLSearchParams({
      search: e.currentTarget.elements.search.value,
    });
    getArtistAlbums(search).catch(handleError);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <Input
          className="md:pr-24"
          id="search"
          name="search"
          ref={inputRef}
        />
        <div className="absolute top-[50%] translate-y-[-50%] right-2 flex gap-1">
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Button size="icon" className="h-6 w-6">
              <ArrowUp className="h-3 w-3" />
            </Button>
          )}
          <div className="hidden md:flex items-center bg-secondary rounded-sm px-2 self-end">
            <Command className="w-3 h-3" /> + k
          </div>
        </div>
      </div>
    </form>
  );
}

type SearchProps = {
  onSubmit: UseSearchArtistReturn["getArtistAlbums"];
  isLoading: boolean;
};

interface FormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}
interface SearchFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
