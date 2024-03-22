import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Movie} from "./Movie";
import css from './MoviesList.module.css'
import globalCss from '../../globalCss/globalCss_Paginate.module.css'
import {moviesActions} from "../../store";
import {useAppSelector} from "../../hooks/useAppSelector";
import {Paginate} from "../PaginateContainer/Paginate";


const MoviesList = () => {
    const {moviesList, total_pages} = useAppSelector(state => state.movies)
    const dispatch = useDispatch();
    const [query, _] = useSearchParams({page: '1'});
    const page = query.get('page')

    useEffect(() => {
        dispatch(moviesActions.getAllMovies({page}))
    }, [page, dispatch]);

    return (
        <div>
            <div className={css.MoviesList}>
                {moviesList && moviesList.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={globalCss.paginate}>
                {moviesList.length > 0 && <Paginate page={query.get('page')} total_pages={total_pages}/>}
            </div>
        </div>
    );
};

export {MoviesList};