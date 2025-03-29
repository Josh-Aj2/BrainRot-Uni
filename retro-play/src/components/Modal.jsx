import React from "react";

function Modal({ anime, character, animeSearched, onClose }) {
  if (!anime && !character && !animeSearched) {
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

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>

        {anime && (
          <>
            <h1>{anime.title_english}</h1>
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <div className="anime-info">
              <p>
                <strong>{getDemographicName(anime)}</strong>
              </p>
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
              <h2>{anime.title_japanese}</h2>
            </div>
          </>
        )}

        {character && (
          <>
            <h1>{character.name}</h1>
            <p>
              <strong>Nickname:</strong>
            </p>
            <ul>
              {" "}
              {character.nicknames.map((nickname, index) => (
                <li key={index}>{nickname}</li>
              ))}
            </ul>

            <p>
              <strong>About:</strong> {character.about}
            </p>
            <div className="name-kanji">
              <p>{character.name_kanji}</p>
            </div>
          </>
        )}

        {animeSearched && (
          <>
            <h1>{animeSearched.title_english}</h1>
            <img
              src={animeSearched.images.jpg.image_url}
              alt={animeSearched.title}
            />
            <div className="anime-info">
              <p>
                <strong>{getDemographicName(animeSearched)}</strong>
              </p>
              <p>
                <strong>Background:</strong> {animeSearched.synopsis}
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
              <p>{animeSearched.title_japanese}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
