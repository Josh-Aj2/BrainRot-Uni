import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../adapters/handleFetch";

function GiveMeList() {
  // Create state for the fetched data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const url =
        "https://free-to-play-games-database.p.rapidapi.com/api/games";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      try {
        const [result, err] = await fetchData(url, options);

        if (err) {
          setError(err.message);
          return;
        }

        // CHECKING DATA
        console.log(result);
        console.log(result[0]);
        //console.log(result[0].game_url);
        // CHECKING DATA

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="game-container">
      <h1>Free-to-Play Games</h1>
      <div className="game-grid">
        {data &&
          data.length > 0 &&
          data.map((game) => (
            <div key={game.id} className="game-card">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="game-image"
              />
              <h3>{game.title}</h3>
            </div>
          ))}
      </div>
      <Link to="/translate">Go to Translator & Joke Generator</Link>
    </div>
  );
}

export default GiveMeList;
