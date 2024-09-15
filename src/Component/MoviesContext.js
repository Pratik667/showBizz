import React, { createContext, useState, useEffect, useContext } from 'react';

const MoviesContext = createContext();

export function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/ApiData/movies.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setMovies(data.movies)) // Assuming JSON structure
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <MoviesContext.Provider value={{ movies }}>
            {children}
        </MoviesContext.Provider>
    );
}

export function useMoviesContext() {
    return useContext(MoviesContext);
}
