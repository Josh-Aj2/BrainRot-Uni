import { useState, useEffect } from "react";
import {
  fetchTopAnime,
  fetchTopCharacters,
  fetchUpcoming,
} from "../adapters/animeFetch";
import Pagination from "../components/PageChange";
import AnimeSearch from "../components/AnimeSearch";

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
          console.log("Top Anime", animeData);
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
                <ul>
                  {topAnime.map((anime, index) => (
                    <li key={`${anime.mal_id}-${index}`}>{anime.title}</li>
                  ))}
                </ul>
              </>
            )}

            {view === "characters" && (
              <>
                <h2>Top Characters</h2>
                <ul>
                  {topCharacters.map((character, index) => (
                    <li key={`${character.mal_id}-${index}`}>
                      {character.name}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {view === "upcoming" && (
              <>
                <h2>Upcoming Anime</h2>
                <ul>
                  {upcoming.map((anime, index) => (
                    <li key={`${anime.mal_id}-${index}`}>{anime.title}</li>
                  ))}
                </ul>
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
