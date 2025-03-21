import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchData from "../adapters/handleFetch";

function GiveMeList() {
  // State for the fetched data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const [result, err] = await fetchData(); // Fetch games from RAWG

        if (err) {
          setError(err.message);
          return;
        }

        //console.log(result); // Debugging

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
    <div className="game-container">
      <h1>Popular Games</h1>
      <div className="game-grid">
        {data &&
          data.length > 0 &&
          data.map((game) => (
            <div key={game.id} className="game-card">
              <img
                src={game.background_image} // RAWG uses "background_image" instead of "thumbnail"
                alt={game.name} // RAWG uses "name" instead of "title"
                className="game-image"
              />
              <h3>{game.name}</h3>
            </div>
          ))}
      </div>
      <Link to="/translate">Go to Translator & Joke Generator</Link>
    </div>
  );
}

export default GiveMeList;
