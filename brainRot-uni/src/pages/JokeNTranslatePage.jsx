import { useState } from "react";
import JustJokes from "../components/Joke";
import Translator from "../components/Translate";

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
      <h2 className="picking">Choose your experience</h2>
      <div className="checkboxes">
        {/* Checkboxes */}
        <label>
          <input
            type="checkbox"
            checked={showJokes}
            onChange={handleJokesCheckbox}
          />{" "}
          Show Jokes
        </label>

        <label>
          <input
            type="checkbox"
            checked={showTranslation}
            onChange={handleTranslateCheckbox}
          />{" "}
          Show Translation
        </label>
      </div>

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
