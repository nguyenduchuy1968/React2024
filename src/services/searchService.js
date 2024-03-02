import {apiService} from "./apiServices";
import {api_key, urls} from "../constants";


// `https://api.themoviedb.org/3/search/movie?api_key=3fd56c473d7867b10c519e20c687a265&query=${query.get('name')}&page=${query.get('page')}`)
const searchService = {
    searchMovies: (query) => apiService.get(urls.search.base,
        {params:{api_key, query:`${query.get('name')}`,page: `${query.get('page')}`}}
    )
}

export {
    searchService
}