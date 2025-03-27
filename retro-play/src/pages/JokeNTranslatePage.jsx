import { useState } from "react";
import JustJokes from "../components/Joke";
import Translator from "../components/Translate";
import { Link } from "react-router-dom";

function HandleView() {
  const [showJokes, setShowJokes] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleJokesCheckbox = () => {
    setShowJokes((prevState) => !prevState);
  };

  const handleTranslateCheckbox = () => {
    setShowTranslation((prevState) => !prevState);
  };

  return (
    <div className="toggle-component">
      <Link to="/">
        <button>Back To Anime</button>
      </Link>

      <h2>Choose your experience</h2>

      {/* Checkboxes */}
      <label>
        <input
          type="checkbox"
          checked={showJokes}
          onChange={handleJokesCheckbox}
        />
        Show Jokes
      </label>

      <label>
        <input
          type="checkbox"
          checked={showTranslation}
          onChange={handleTranslateCheckbox}
        />
        Show Translation
      </label>

      {showJokes && (
        <section className="jokes-section">
          {" "}
          <JustJokes />
        </section>
      )}

      {showTranslation && (
        <section className="translator-section">
          <Translator />
        </section>
      )}
    </div>
  );
}

export default HandleView;
