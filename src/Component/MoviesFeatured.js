import React from 'react';
import { useMoviesContext } from '../Component/MoviesContext';
import { useNavigate } from "react-router-dom";


function MoviesFeatured() {
    const { movies } = useMoviesContext();
    let navigate  = useNavigate();

    function handleClick(id) {
        navigate(`/shows/${id}`);
    }

    // const scroll = (direction) => {
    //     const container = document.querySelector('.slider-inner');
    //     container.scrollBy({
    //       left: direction * 300, // Adjust scroll amount as needed
    //       behavior: 'smooth'
    //     });
    //   };

    return (
        <div className="feature-container container mx-auto">
            <div className="feature-sub mb-3">
                <h3 className="text-4xl entry-title">Your Movies Studio</h3>
                <a className="text-sm see-all" href="/shows">See All</a>
            </div>            
            {/* <button className="arrow left-arrow" onClick={() => scroll(-1)}>‹</button> */}
            {/* Add Class slider inner in below div to activate slider .slider-inner */}
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
            {/* <button className="arrow right-arrow" onClick={() => scroll(1)}>›</button> */}
        </div>
    );
}

export default MoviesFeatured;
