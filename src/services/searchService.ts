import {apiService} from "./apiService";
import {api_key, urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";


const searchService = {
    searchMovies: (query: URLSearchParams): IRes<IPagination<IMovie>> => apiService.get(urls.search.base,
        {params: {api_key, query: `${query.get('name')}`, page: `${query.get('page')}`}}
    )
}

export {
    searchService
}