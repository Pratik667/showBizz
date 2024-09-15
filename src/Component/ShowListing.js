import React from 'react';
import { useMoviesContext } from '../Component/MoviesContext';
import { useNavigate } from "react-router-dom";

function ShowListing() {
  const { movies } = useMoviesContext();
  let navigate  = useNavigate();
  function handleClick(id) {
    navigate(`/shows/${id}`);
  }
  return (
    <section className="feature-container container mx-auto listing-page">
      <div className="featured-card">
        {movies.map((movie, index) => (
          <div className="vacation-card " onClick={() => handleClick(index + 1)}>
            <div className="vacation-card-image-parent">
              <img className="vacation-card-image" src={movie.media.cover} alt={movie.media.cover} />
            </div>
            <div className="vacation-card-info">
              <div>
                <div className="vacation-card-eyebrow text-xl">{movie.title}</div>
                <div className="vacation-card-genre text-xs">{movie.genres.join('/')}</div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default ShowListing;
