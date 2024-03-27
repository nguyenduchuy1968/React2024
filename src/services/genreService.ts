import {apiService} from "./apiService";
import {api_key, urls} from "../constants";
import {IRes} from "../types";
import {IGenre} from "../interfaces";
import {IMovie, IPagination} from "../interfaces";

const genreService = {
    getAllGenres: (page: number): IRes<IPagination<IGenre>> => apiService.get(urls.genres.base, {
        params: {
            page,
            api_key
        }
    }),
    getMoviesByGenreId: (genreId: string, page: number): IRes<IPagination<IMovie>> => apiService.get(urls.genre.byId, {
        params: {
            api_key,
            with_genres: (genreId),
            page
        }
    })
}

export {
    genreService
}