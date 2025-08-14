import { useState, useEffect } from "react";
import { fetchTranslate } from "../adapters/jokeNTranslateFetch";

function Translator() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("es");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!text) {
      setTranslatedText("");
    }
  }, [text]);

  const handleTranslateClick = async () => {
    if (!text) {
      setError("Please enter some text to translate.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const translation = await fetchTranslate(text, language);

      //CHECKING DATA
      console.log("Translation", translatedText);
      //CHECKING DATA

      setTranslatedText(translation.responseData.translatedText);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="translation-section">
      <h2 className="JnT-heading">Translate Text</h2>
      <div className="translate-input">
        <label htmlFor="text-input">Enter text to translate</label>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="4"
          cols="50"
        ></textarea>
      </div>
      <br />
      <div className="language-select">
        <label htmlFor="language-select">Choose Language:</label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </select>
      </div>
      <br />
      <button
        className="translate-btn"
        onClick={handleTranslateClick}
        disabled={loading}
      >
        {loading ? "Translating..." : "Translate"}
      </button>
      {error && <div className="error">{error}</div>}
      {translatedText && (
        <div className="translated">
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
}

export default Translator;
