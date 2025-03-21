//
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAnimeList } from "../adapters/handleFetch";

function GiveMeList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchAnimeList(); // Fetch anime list from Jikan API

        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Conditional Rendering
  if (loading) return <div>Loading...</div>;
  if (error) return <p>{error}</p>;

  return (
    <div className="anime-container">
      <h1>Popular Anime</h1>
      <div className="anime-grid">
        {data &&
          data.length > 0 &&
          data.map((anime) => (
            <div key={anime.mal_id} className="anime-card">
              <img
                src={anime.images.jpg.image_url} // Jikan API uses "images" with the "jpg" property for image URLs
                alt={anime.title}
                className="anime-image"
              />
              <h3>{anime.title}</h3>
            </div>
          ))}
      </div>
      <Link to="/translate">Go to Translator & Joke Generator</Link>
    </div>
  );
}

export default GiveMeList;
