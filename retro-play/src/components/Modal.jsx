import React from "react";

function Modal({ anime, onClose }) {
  if (!anime) return null; // Return null if no anime is selected

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h1>{anime.title}</h1>
        <img src={anime.images.jpg.image_url} alt={anime.title} />
        <p>{anime.synopsis}</p>
        <p>
          <strong>Episodes:</strong> {anime.episodes}
        </p>
        <p>
          <strong>Rating:</strong> {anime.rating}
        </p>
        <p>
          <strong>Score:</strong> {anime.score}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {anime.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Studios:</strong>{" "}
          {anime.studios.map((studio) => studio.name).join(", ")}
        </p>
        {anime.trailer && (
          <a href={anime.trailer.url} target="_blank" rel="noopener noreferrer">
            Watch Trailer
          </a>
        )}
      </div>
    </div>
  );
}

export default Modal;
