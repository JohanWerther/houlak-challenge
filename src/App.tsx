import Search from "./components/search";
import Header from "./components/header";
import useAuth from "./lib/hooks/use-auth";
import { Button } from "./components/ui/button";
import ArtistCover from "./components/artist-cover";
import ArtistAlbumsList from "./components/artist-albums-list";
import useArtistSearch from "./lib/hooks/use-artist-search";
import EmptyState from "./components/empty-state";
import RequestsLogsFAB from "./components/requests-logs-fab";
import useDisclousure from "./lib/hooks/use-disclousure";
import RequestsLogsDialog from "./components/requests-logs-dialog";

function App() {
  const { artistData, getArtistAlbums, isLoading, didSearch } =
    useArtistSearch();
  const { isLoggedIn } = useAuth();
  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useDisclousure();

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
      <ArtistCover artist={artistData} />
      <main>
        {!didSearch ? <EmptyState /> : null}
        {artistData?.albums?.length ? (
          <ArtistAlbumsList albums={artistData.albums} />
        ) : null}
      </main>
      <RequestsLogsDialog isOpen={isModalOpen} onOpenChange={closeModal} />
      <RequestsLogsFAB onClick={openModal} />
    </>
  );
}

export default App;
