const baseURL = 'https://api.themoviedb.org/3'
const api_key = '3fd56c473d7867b10c519e20c687a265'

// Image constants
const imageBaseUrl = 'https://image.tmdb.org/t/p'
const posterSize = 'w300'
const posterSize_infoPage = 'w400'

//Service constants
const movies = '/discover/movie'
const movie = '/movie'
const genres = '/genre/movie/list'
const search = '/search/movie'

const urls = {
    movies: {
        base: movies
    },
    movie: {
        byId: (id: number): string => `${movie}/${id}`
    },
    genres: {
        base: genres
    },
    genre: {
        byId: movies
    },
    search: {
        base: search
    }
}

export {
    baseURL,
    urls,
    imageBaseUrl,
    posterSize,
    posterSize_infoPage,
    search,
    api_key
}

