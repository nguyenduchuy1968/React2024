import {api_key, urls} from "../constants";
import {apiService} from "./apiService";
import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";

const movieService = {
    getAll: (page: number): IRes<IPagination<IMovie>> => apiService.get(urls.movies.base, {params: {page, api_key}}),
    getMovieById: (id: number): IRes<IMovie> => apiService.get(urls.movie.byId(id), {params: {api_key}})
}

export {
    movieService
}