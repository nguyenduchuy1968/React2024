import {apiService} from "./apiServices";
import {api_key, urls} from "../constants";

const genreService = {
    getAll: () => apiService.get(urls.genres.base, {params: {api_key}}),
    getMoviesByGenreId: (genreId, page= '1') => apiService.get(urls.genre.byId, {params: {api_key, with_genres:(genreId), page}})

}

export {
    genreService
}