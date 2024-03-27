// Request for searching all movies (movies list) and show them if exists
//pagination bases on them first page (number 1) and last page (total_pages), paginate's buttons will inactive when rich these values.
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {useAppSelector, useAppDispatch} from "../../hooks";
import {moviesActions} from "../../store";
import {Movie} from "./Movie";
import {Paginate} from "../PaginateContainer";
import css from './MoviesList.module.css'
import globalCss from '../../globalCss/globalCss_Paginate.module.css'


const MoviesList = () => {
    const {moviesList, total_pages, dataError} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const [query, _] = useSearchParams({page: '1'});
    const page = Number(query.get('page'))

    useEffect(() => {
        dispatch(moviesActions.getAllMovies(page))
    }, [page, dispatch]);

    return (
        <div>
            {dataError && <h1 className={css.MoviesList_Error}>{dataError}</h1>}
            <div className={globalCss.paginate}>
                {moviesList.length > 0 && <Paginate page={+query.get('page')} total_pages={+total_pages}/>}
            </div>
            <div className={css.MoviesList}>
                {moviesList && moviesList.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={globalCss.paginate}>
                {moviesList.length > 0 && <Paginate page={+query.get('page')} total_pages={+total_pages}/>}
            </div>
        </div>
    );
};

export {MoviesList};