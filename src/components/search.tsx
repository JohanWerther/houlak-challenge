import { UseSearchArtistReturn } from "@/lib/hooks/use-artist-search";
import { Input } from "./ui/input";
import { ArrowUp, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export default function Search({
  onSubmit: getArtistAlbums,
  isLoading,
}: SearchProps) {
  const handleSubmit = async (e: React.FormEvent<SearchFormElement>) => {
    e.preventDefault();
    const search = new URLSearchParams({
      search: e.currentTarget.elements.search.value,
    });
    getArtistAlbums(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <Input className="md:min-w-[500px]" id="search" name="search" />
        <div className="absolute top-[50%] translate-y-[-50%] right-2">
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Button size="icon" className="h-6 w-6">
              <ArrowUp className="h-3 w-3" />
            </Button>
          )}
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
