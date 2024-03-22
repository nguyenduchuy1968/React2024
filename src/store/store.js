import {configureStore} from "@reduxjs/toolkit";
import {movieInfoReducer, moviesReducer} from "./slices";
import {loadingReducer, genresReducer, genreMoviesReducer, searchMovieReducer, themeSwitchReducer} from "./slices";


const store = configureStore({
    reducer: {
        loadingReducer,
        movies: moviesReducer,
        movieInfoReducer,
        genres: genresReducer,
        genreMovies: genreMoviesReducer,
        searchMovies: searchMovieReducer,
        themeSwitch: themeSwitchReducer
    }
});

export {
    store
}