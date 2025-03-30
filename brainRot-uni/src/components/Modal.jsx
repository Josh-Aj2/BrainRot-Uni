import React, { useState } from "react";

function Modal({ anime, character, animeSearched, upcoming, onClose }) {
  if (!anime && !character && !animeSearched && !upcoming) {
    return null;
  } // Return null if no anime is selected

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getDemographicName = (data) => {
    return data?.demographics?.length > 0
      ? data.demographics[0].name
      : "No demographic";
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>

        {anime && (
          <>
            <h2>{anime.title_english}</h2>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <div className="anime-info">
              <h3>
                <strong>{getDemographicName(anime)}</strong>
              </h3>
              <div className="anime-bio">
                <p>
                  <strong>Background:</strong> {anime.synopsis}
                </p>
              </div>
              {anime.trailer && (
                <a
                  href={anime.trailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Trailer
                </a>
              )}
              <div className="anime-details">
                <p>
                  <strong>Air Date: </strong>
                  {anime.aired.string} - {anime.status}
                </p>
                <p>
                  <strong>Score: </strong>
                  {anime.score}
                </p>
                <p>
                  <strong>Rating: </strong>
                  {anime.rating}
                </p>
                <p>
                  <strong>Episodes:</strong> {anime.episodes}, {anime.duration}
                </p>
              </div>
              <h3>{anime.title_japanese}</h3>
            </div>
          </>
        )}

        {character && (
          <>
            <h2 className="character-title">{character.name}</h2>
            <p>
              <strong>Nickname:</strong>
            </p>
            <div className="character-nicknames">
              <ul>
                {character.nicknames.map((nickname, index) => (
                  <li key={index} className="nickname-item">
                    {nickname}
                  </li>
                ))}
              </ul>
            </div>
            <div className="character-about">
              <p>
                <strong>About:</strong>{" "}
                {isExpanded
                  ? character.about
                  : character.about.slice(0, 300) +
                    (character.about.length > 300 ? "..." : "")}
              </p>
              {/* Show "Show More" / "Show Less" based on state */}
              {character.about.length > 300 && (
                <button onClick={handleToggle} className="show-more-btn">
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
            <div className="name-kanji">
              <p>
                <strong>{character.name_kanji}</strong>
              </p>
            </div>
          </>
        )}

        {animeSearched && (
          <>
            <h2>{animeSearched.title_english}</h2>
            <img
              src={animeSearched.images.jpg.image_url}
              alt={animeSearched.title}
            />
            <div className="anime-info">
              <h2>
                <strong>{getDemographicName(animeSearched)}</strong>
              </h2>
              <p>
                <strong>Background:</strong> {animeSearched.synopsis}
              </p>
              <p>
                <strong>Air Date:</strong>
                {animeSearched.aired.string}
              </p>
              <p>
                <strong>Score: </strong>
                {animeSearched.score}
              </p>
              <p>
                <strong>Rating: </strong>
                {animeSearched.rating}
              </p>
              <p>
                <strong>Episodes:</strong> {animeSearched.episodes},{" "}
                {animeSearched.duration}
              </p>
              {animeSearched.trailer && (
                <a
                  href={animeSearched.trailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Trailer
                </a>
              )}
              <h2>{animeSearched.title_japanese}</h2>
            </div>
          </>
        )}

        {upcoming && (
          <>
            <h2>{upcoming.title}</h2>

            <div className="anime-info">
              <h3>
                <strong>{getDemographicName(upcoming)}</strong>
              </h3>
              <p>
                <strong>Background:</strong> {upcoming.synopsis}
              </p>
              <p>
                <strong>Air Date:</strong> {upcoming.aired.string}
              </p>

              <p>
                <strong>Rating:</strong> {upcoming.rating}
              </p>
              <p>
                <strong>Status:</strong> {upcoming.status}
              </p>
              {upcoming.trailer && (
                <a
                  href={upcoming.trailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Trailer
                </a>
              )}
              <h3>{upcoming.title_japanese}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
