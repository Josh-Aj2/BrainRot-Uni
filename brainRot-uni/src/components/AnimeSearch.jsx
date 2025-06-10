import { useEffect, useState } from "react";
import { fetchAnimeSearch } from "../adapters/animeFetch";
import Pagination from "./PageChange";
import Modal from "./Modal";

function AnimeSearch({ searchQuery, setSearchQuery, currPage, setCurrPage }) {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  //FOR MODAL
  const [selectedSearch, setSelectedSearch] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const animeData = await fetchAnimeSearch(searchQuery, currPage);

      // Checking
      console.log("Anime Search:", animeData);

      setSearchData(animeData.data);
      setHasNextPage(animeData.pagination.has_next_page);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchQuery(newSearchTerm);
  };

  const openModal = (item) => {
    setSelectedSearch(item);
  };

  const closeModal = () => {
    setSelectedSearch(null);
  };

  useEffect(() => {
    if (searchQuery.trim()) {
      handleSearch();
    }
  }, [searchQuery, currPage]);

  return (
    <div className="anime-search-container">
      <h2>Search For Anime</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Anime"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="anime-grid">
            {searchData.map((anime, index) => (
              <div
                key={`${anime.mal_id}-${index}`}
                className="anime-grid-item"
                onClick={() => openModal(anime)}
              >
                <img src={anime.images.jpg.image_url} alt={anime.title} />
                <p>{anime.title_english}</p>
              </div>
            ))}
          </div>
          {selectedSearch && (
            <>
              <Modal animeSearched={selectedSearch} onClose={closeModal} />
            </>
          )}
          <Pagination
            currPage={currPage}
            setCurrPage={setCurrPage}
            hasNextPage={hasNextPage}
          />
        </>
      )}
    </div>
  );
}

export default AnimeSearch;
