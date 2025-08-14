import { useState } from "react";
import { fetchJoke } from "../adapters/jokeNTranslateFetch";

function JustJokes() {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  const doJustJokes = async () => {
    try {
      const response = await fetchJoke();

      //CHECKING DATA
      console.log(response);
      //CHECKING DATA

      setJoke(response.setup + " " + response.punchline);
    } catch (error) {
      setJoke("Failed to fetch a joke. Please try again.");
      setError(error);
    }
  };

  return (
    <div className="joke-section">
      <h2 className="JnT-heading">Random Joke</h2>
      <p className="joke-data">{joke}</p>

      {error && <div className="error">{error.message}</div>}

      <button className="joke" onClick={doJustJokes}>
        Get A Joke
      </button>
    </div>
  );
}

export default JustJokes;
