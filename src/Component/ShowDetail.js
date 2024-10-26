import React from 'react';
import { useParams } from 'react-router-dom';
import { useMoviesContext } from '../Component/MoviesContext';
import { useNavigate } from "react-router-dom";

function ShowDetail() {
  const { movies } = useMoviesContext();
  const { id } = useParams();
  const show = movies[id - 1];
  let navigate  = useNavigate();

  function handleClick(id) {
    navigate(`/booking/${id}`);
  }

  if (!show) {
    return <div>Show not found</div>;
  }

  const backgroundImage = `linear-gradient(
    90deg,
    rgb(26, 26, 26) 24.97%,
    rgb(26, 26, 26) 38.3%,
    rgba(26, 26, 26, 0.04) 97.47%,
    rgb(26, 26, 26) 100%
  ), url('${show.media.background}')`;

  return (
    <div className="details-page">
      <section className="background-container">
        <div className="title-container" style={{ backgroundImage }}>
          <div className="container">
            <div className="media-image">
              <img className="media-card-image" src={show.media.cover} alt={`Cover for ${show.title}`} />
            </div>
            <div className="media-desc">
                <h3 className="media-title">{show.title}</h3>
                <span className="media-rating">IMDB: {show.rating} ({show.votes})</span>
                <div className="media-format">
                <span className="form-data duration">{show.duration}</span> 
                  <span className="form-data-spacer">•</span>
                  {show.formats.map((format) =>
                      <span className="form-data format">{format}</span>              
                  )}
                  <span className="form-data-spacer">•</span>
                  <span className="form-data certification">{show.certification}</span>
                  <span className="form-data-spacer">•</span>
                  <span className="form-data release-date">{show.release_date}</span>
                </div>
                <div className="book-ticket"><button onClick={() => handleClick(show.title)}>Book a Ticket</button></div>
            </div>
            
          </div>
        </div>
      </section>
      <section className="synopsis container">
        <div className="synopsis-section about-movie">
                <h4>About the movie</h4>
                <article>{show.synopsis}</article>
        </div>
        <div className="synopsis-section cast">
                <h4>Cast</h4>
                <article>
                  <ul>
                            {show.cast.map((member, i) => (
                                <li key={i}><strong>{member.actor}:</strong> {member.role}</li>
                            ))}
                        </ul>
                </article>
        </div>
        <div className="synopsis-section crew">
                <h4>Crew</h4>
                <article>
                  <ul>
                            {show.crew.map((member, i) => (
                                <li key={i}><strong>{member.role}:</strong> {member.name}</li>
                            ))}
                        </ul>
                </article>
        </div>
      </section>      
    </div>
  );
}

export default ShowDetail;
