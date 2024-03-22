import {apiService} from "./apiServices";
import {api_key, urls} from "../constants";

const genreService = {
    getAllGenres: (page) => apiService.get(urls.genres.base, {params: {page, api_key}}),
    getMoviesByGenreId: (genreId, page) => apiService.get(urls.genre.byId, {params: {api_key, with_genres:(genreId), page}})

}

export {
    genreService
}