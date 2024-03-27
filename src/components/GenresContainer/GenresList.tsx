// Request for searching movie's genre list and show them if exists
import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";


import css from './GenresList.module.css'
import {genresActions} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";


const GenresList = () => {
    const {genresList, dataError} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [query, _] = useSearchParams({page: '1'});
    const page = +query.get('page')

    useEffect(() => {
        dispatch(genresActions.getGenresList(page))
    }, [page, dispatch]);

    return (
        <div className={css.GenresList}>
            {dataError && <h1>{dataError}</h1>}
            {genresList && genresList.map(genre =>
                <div key={genre.id}>
                    <li className={css.Genre} onClick={() => navigate(`/genres/${genre.id}`)}><a>{genre.name}</a></li>
                </div>
            )}
        </div>
    );
};

export {GenresList};