import {configureStore} from "@reduxjs/toolkit";

import {
    loadingReducer,
    searchMovieReducer,
    moviesReducer,
    movieInfoReducer,
    genresReducer,
    genreMoviesReducer,
    themeSwitchReducer
} from "./slices";


const store = configureStore({
    reducer: {
        loadingReducer,
        movies: moviesReducer,
        movieInfo: movieInfoReducer,
        genres: genresReducer,
        genreMovies: genreMoviesReducer,
        searchMovies: searchMovieReducer,
        themeSwitch: themeSwitchReducer,

    }
});

export {
    store
}