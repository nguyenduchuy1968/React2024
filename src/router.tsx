import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesListPage, GenresListPage, GenreMoviesPage, SearchMovieListPage, ErrorPage} from "./pages";


const router = createBrowserRouter([

    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesListPage/>
            },
            {
                path: 'movies/:id', element: <MovieInfoPage/>
            },
            {
                path: 'genres', element: <GenresListPage/>, children: [
                    {
                        path: ':id', element: <GenreMoviesPage/>
                    }
                ]
            },
            {
                path: '/movies/search', element: <SearchMovieListPage/>

            }
        ]
    }
])

export {router}
