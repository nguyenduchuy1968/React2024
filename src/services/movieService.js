import {api_key, urls} from "../constants";
import {apiService} from "./apiServices";

const movieService = {
    getMoviesByPage: (page) => apiService.get(urls.movies.base, {params:{page, api_key}}),
    getMovieById: (id) => apiService.get(urls.movie.byId(id), {params: {api_key}})
}

export {
    movieService
}