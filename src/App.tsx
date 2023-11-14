import Header from "./components/header";
import Search from "./components/search";
import { Button } from "./components/ui/button";
import useArtistSearch from "./lib/hooks/use-artist-search";
import useAuth from "./lib/hooks/use-auth";

function App() {
  const { artistAlbums, getArtistAlbums, isLoading } = useArtistSearch();
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Header>
        {isLoggedIn ? (
          <Search onSubmit={getArtistAlbums} isLoading={isLoading} />
        ) : (
          <div className="ms-auto">
            <Button asChild className="mr-2">
              <a href="/auth/login" className="leading-4">
                Login
              </a>
            </Button>
          </div>
        )}
      </Header>
      {artistAlbums?.albums?.length
        ? artistAlbums.albums.map((a) => (
            <div key={a.id}>
              <img src={a.images[0].url} alt="" className="max-w-[300px]" />
            </div>
          ))
        : null}
    </>
  );
}

export default App;
