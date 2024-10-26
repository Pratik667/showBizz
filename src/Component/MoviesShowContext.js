import React, { createContext, useState, useEffect, useContext } from 'react';

const MoviesShowContext = createContext();

export function MoviesShowProvider({ children }) {
    const [movieShows, setMovieShows] = useState([]);
    useEffect(() => {
        fetch('/ApiData/movie-shows.json').then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(data => setMovieShows(data.movies)) // Assuming JSON structure
            .catch(error => console.error('Error fetching movies:', error));
    }, []);
    return (
        <MoviesShowContext.Provider value={{ movieShows }}>
            {children}
        </MoviesShowContext.Provider>
    );
}

export function useMovieShowsContext() {
    //This is a best practise which prevents developer from creating useContext instance in every component they use
    return useContext(MoviesShowContext);
}