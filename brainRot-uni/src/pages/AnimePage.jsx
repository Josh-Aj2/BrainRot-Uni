import { useState, useEffect } from "react";
import {
  fetchTopAnime,
  fetchTopCharacters,
  fetchUpcoming,
} from "../adapters/animeFetch";
import Pagination from "../components/PageChange";
import AnimeSearch from "../components/AnimeSearch";
import Modal from "../components/Modal";

function AnimeList() {
  //FOR DATA
  const [topAnime, setTopAnime] = useState([]);
  const [topCharacters, setTopCharacters] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  //FOR PAGE CHANGE AND VIEW
  const [currPage, setCurrPage] = useState(1);
  const [currCharacter, setCurrCharacter] = useState(1);
  const [currUpcomingPage, setCurrUpcomingPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasNextPage, setHasNextPage] = useState(true);
  const [view, setView] = useState("anime");

  //FOR MODAL
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedUpcoming, setSelectedUpcoming] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const getTop = async () => {
        try {
          setLoading(true);
          const animeData = await fetchTopAnime(currPage);
          const charactersData = await fetchTopCharacters(currCharacter);
          const upcomingData = await fetchUpcoming(currUpcomingPage);

          //CHECKING DATA
          console.log("Upcoming", upcomingData);
          console.log("Top Anime", animeData.data);
          console.log("Top characters", charactersData);

          //CHECKING DATA

          setTopAnime(animeData.data);
          setTopCharacters(charactersData.data);

          setHasNextPage(animeData.pagination.has_next_page);
          setUpcoming(upcomingData.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      getTop();
    }, 2000); // ⏳ Waits 2 seconds before calling API

    return () => clearTimeout(timeout); // Cleanup to avoid memory leaks
  }, [currPage, currCharacter, currUpcomingPage]);

  const handleViewChange = (newView) => {
    setView(newView);
    setCurrPage(1);
    setCurrCharacter(1);
    setCurrUpcomingPage(1);
  };

  const openModal = (item, type) => {
    if (type === "anime") {
      setSelectedAnime(item);
      setSelectedCharacter(null);
      setSelectedUpcoming(null);
    } else if (type === "character") {
      setSelectedCharacter(item);
      setSelectedAnime(null);
      setSelectedUpcoming(null);
    } else if (type === "upcoming") {
      setSelectedUpcoming(item);
      setSelectedCharacter(null);
      setSelectedAnime(null);
    }
  };

  const closeModal = () => {
    setSelectedAnime(null);
    setSelectedCharacter(null);
    setSelectedUpcoming(null);
  };

  return (
    <div className="anime-container">
      <div className="sidebar">
        <button onClick={() => handleViewChange("anime")}>Top Anime</button>
        <button onClick={() => handleViewChange("characters")}>
          Top Characters
        </button>
        <button onClick={() => handleViewChange("upcoming")}>
          Upcoming Anime
        </button>
        <button onClick={() => handleViewChange("search")}>
          Search For Anime
        </button>
      </div>

      <div className="content">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {view === "anime" && (
              <>
                <h2>Top Anime</h2>
                <div className="anime-grid">
                  {topAnime.map((anime, index) => (
                    <div
                      key={`${anime.mal_id}-${index}`}
                      className="anime-grid-item"
                      onClick={() => openModal(anime, "anime")}
                    >
                      <img src={anime.images.jpg.image_url} alt={anime.title} />
                      <p>{anime.title_english}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {view === "characters" && (
              <>
                <h2>Top Characters</h2>
                <div className="anime-grid">
                  {topCharacters.map((character, index) => (
                    <div
                      key={`${character.mal_id}-${index}`}
                      className="anime-grid-item"
                      onClick={() => openModal(character, "character")}
                    >
                      <img
                        src={character.images.jpg.image_url}
                        alt={character.title}
                      />
                      <p>{character.name}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {view === "upcoming" && (
              <>
                <h2>Upcoming Anime</h2>
                <div className="anime-grid">
                  {upcoming.map((upcoming, index) => (
                    <div
                      key={`${upcoming.mal_id}-${index}`}
                      className="anime-grid-item"
                      onClick={() => openModal(upcoming, "upcoming")}
                    >
                      <img
                        src={upcoming.images.jpg.image_url}
                        alt={upcoming.title}
                      />
                      <p>{upcoming.title_english}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {view === "search" && (
              <AnimeSearch
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                currPage={currPage}
                setCurrPage={setCurrPage}
              />
            )}

            {/* Anime Pagination */}
            {view === "anime" && (
              <Pagination
                currPage={currPage}
                setCurrPage={setCurrPage}
                hasNextPage={hasNextPage}
              />
            )}

            {/* Characters Pagination */}
            {view === "characters" && (
              <Pagination
                currPage={currCharacter}
                setCurrPage={setCurrCharacter}
                hasNextPage={hasNextPage}
              />
            )}

            {view === "upcoming" && (
              <Pagination
                currPage={currUpcomingPage}
                setCurrPage={setCurrUpcomingPage}
                hasNextPage={hasNextPage}
              />
            )}

            {(selectedAnime || selectedCharacter || selectedUpcoming) && (
              <Modal
                anime={selectedAnime}
                character={selectedCharacter}
                upcoming={selectedUpcoming}
                onClose={closeModal}
              />
            )}
            <p>
              {(() => {
                if (view === "anime") {
                  return `Top Anime Page ${currPage}`;
                } else if (view === "characters") {
                  return `Top Characters Page ${currCharacter}`;
                } else if (view === "upcoming") {
                  return `Upcoming Anime Page ${currUpcomingPage}`;
                } else {
                  return `Page ${currPage}`;
                }
              })()}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default AnimeList;
