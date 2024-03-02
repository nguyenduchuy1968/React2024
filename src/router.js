import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {ErrorPage, GenreMovieListPage, GenresListPage, MovieInfoPage, MoviesListPage} from "./pages";
import {SearchMovieListPage} from "./pages/SearchMovieListPage";
// import {ErrorPage} from "./pages";
// import {MoviesList} from "./components";
// import {Genres} from "./pages";
// import {MoviesListPage} from "./pages";
// import {MovieInfoPage} from "./pages";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout />, errorElement:<ErrorPage />, children: [
            {
                index: true, element: <Navigate to={'movies'} />
            },
            {
                path: 'movies', element: <MoviesListPage />
            },
            {
                path: 'movies/:id', element: <MovieInfoPage />
            },
            {
                path: 'genres', element: <GenresListPage />, children:[
                    {
                        path: ':id', element: <GenreMovieListPage />
                    }
                ]
            },
            {
                path: '/movies/search', element: <SearchMovieListPage />

            }
        ]
    }
])

export {
    router
}