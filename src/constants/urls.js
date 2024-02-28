const baseURL = 'https://api.themoviedb.org/3'
const imageBaseUrl = 'https://image.tmdb.org/t/p'
const posterSize = 'w200'

// const imageBaseURL = 'https://image.tmdb.org/t/p'

const movies = '/discover/movie'
const movie = '/movie'
const genres ='/genre/movie/list'
// const genres ='/genre/movie/list'

// https://api.themoviedb.org/3/genre/movie/list

// https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28
const api_key = '3fd56c473d7867b10c519e20c687a265'

// const backDropSize = 'w1280'
// const posterSize = 'w500'


const urls = {
    movies: {
        base: movies,
        // byPage: (page) => `${movies}?page=${page}&api_key=${apiKey}`
        // byPage: (page) => `${movies}?page=${page}&api_key=${apiKey}`
    },
    movie: {

        // byId: (id) => `${movie}/${id}?api_key=${apiKey}`
        byId: (id) => `${movie}/${id}`
    },
    genres: {
        // base: `${genres}?api_key=${apiKey}`
        base: genres
    },
    genre: {
        // byGenreId: (genreId) => `${movies}?api_key=${apiKey}&with_genres=${genreId}`
        byId: movies
    }

}


export {
    baseURL,
    imageBaseUrl,
    posterSize,
    urls,
    api_key
}

