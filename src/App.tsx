import Search from "./components/search";
import Header from "./components/header";
import ArtistCover from "./components/artist-cover";
import ArtistAlbumsList from "./components/artist-albums-list";
import useArtistSearch from "./lib/hooks/use-artist-search";
import EmptyState from "./components/empty-state";
import RequestsLogsFAB from "./components/requests-logs-fab";
import useDisclousure from "./lib/hooks/use-disclousure";
import RequestsLogsDialog from "./components/requests-logs-dialog";
import GeneralErrorBoundary from "./components/general-error-boundary";

function App() {
  const { artistData, getArtistAlbums, isLoading, didSearch } =
    useArtistSearch();

  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useDisclousure();

  return (
    <>
      <Header>
        <Search onSubmit={getArtistAlbums} isLoading={isLoading} />
      </Header>
      <GeneralErrorBoundary className="text-center">
        <ArtistCover artist={artistData} />
        <main>
          {!didSearch ? <EmptyState /> : null}
          {artistData?.albums?.length ? (
            <ArtistAlbumsList albums={artistData.albums} />
          ) : null}
        </main>
        <RequestsLogsDialog isOpen={isModalOpen} onOpenChange={closeModal} />
        <RequestsLogsFAB onClick={openModal} />
      </GeneralErrorBoundary>
    </>
  );
}

export default App;
