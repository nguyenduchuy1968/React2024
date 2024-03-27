// Request for searching all movies of the concrete genre and show them if exists
//pagination bases on them first page (number 1) and last page (total_pages), paginate's buttons will inactive when rich these values.
import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "../MoviesContainer";
import {genreMoviesActions} from "../../store";
import {Paginate} from "../PaginateContainer";
import globalCss from "../../globalCss/globalCss_Paginate.module.css";
import css from './GenreMovies.module.css'

const GenreMovies = () => {
    const {genreMovies, total_pages} = useAppSelector(state => state.genreMovies)
    const dispatch = useAppDispatch();
    let {id} = useParams()

    const [query] = useSearchParams({page: '1'});
    const page = +query.get('page')

    useEffect(() => {
        dispatch(genreMoviesActions.getGenreMovies({id, page}))
    }, [id, page]);

    return (
        <div>
            <div className={globalCss.paginate}>
                {genreMovies.length > 0 && <Paginate page={+query.get('page')} total_pages={total_pages}/>}
            </div>
            <h1> {total_pages} movies found</h1>
            <div className={css.GenreMovieList}>
                {genreMovies && genreMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={globalCss.paginate}>
                {genreMovies.length > 0 && <Paginate page={+query.get('page')} total_pages={total_pages}/>}
            </div>
        </div>
    );
};

export {GenreMovies};