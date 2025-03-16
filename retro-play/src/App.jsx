import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [games, setGames] = useState([]); // Initializing as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games"
    )
      .then((response) => {
        if (!response.ok) {
          //console.log(response.ok);
          throw new Error("Failed to fetch games");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data); // Log the whole response for inspection
        // Check if the data has a 'results' key and it's an array

        setGames(data); // Set the games data to the state

        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Debugging check: Ensure games is a valid array and has at least one element
  if (games && games.length === 0) {
    return <div>No games available.</div>;
  }

  // Access the first game only if games exists and has data
  //const firstGame = games[0]; // This should now be safe to access

  return (
    <div>
      <h1>Retro Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.title}</h3>
            <img src={game.thumbnail} alt={game.title} />
            <p>{game.short_description}</p>
            <a href={game.game_url} target="_blank" rel="noopener noreferrer">
              Play {game.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
