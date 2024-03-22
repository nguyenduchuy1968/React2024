import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {useAppSelector} from "../../hooks";
import {genreMoviesActions} from "../../store";
import {Movie} from "../MoviesContainer";
import {Paginate} from "../PaginateContainer";
import globalCss from "../../globalCss/globalCss_Paginate.module.css";
import css from './GenreMovies.module.css'

const GenreMovies = () => {
    const {genreMovies, total_pages} = useAppSelector(state => state.genreMovies)
    const dispatch = useDispatch();
    const {id} = useParams()
    const [query] = useSearchParams({page: '1'});
    const page = query.get('page')

    useEffect(() => {
        dispatch(genreMoviesActions.getGenreMovies({id, page}))
    }, [id, page]);

    return (
        <div>
            <h1> {total_pages} movies found</h1>
            <div className={css.GenreMovieList}>
                {genreMovies && genreMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={globalCss.paginate}>
                {genreMovies.length > 0 && <Paginate page={query.get('page')} total_pages={total_pages}/>}
            </div>
        </div>
    );
};

export {GenreMovies};