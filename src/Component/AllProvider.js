import { MovieProvider } from './MoviesContext';
import { MoviesShowProvider } from './MoviesShowContext';

export const AllProvider = ({children}) => {
    return(
        <MovieProvider>
            <MoviesShowProvider>
                {children}
            </MoviesShowProvider>
        </MovieProvider>
    );
};