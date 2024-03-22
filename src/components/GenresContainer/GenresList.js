import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {genresActions} from "../../store";
import css from './GenresList.module.css'


const GenresList = () => {
    const {genresList, total_pages} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [query, _] = useSearchParams({page: '1'});
    const page = query.get('page')

    useEffect(() => {
        dispatch(genresActions.getGenresList({page}))
    }, [page, dispatch]);
    return (
        <div className={css.GenresList}>
            {genresList && genresList.map(genre =>
                <div key={genre.id}>
                    <li className={css.Genre} onClick={() => navigate(`/genres/${genre.id}`)}> <a>{genre.name}</a></li>
                </div>
            )}
        </div>
    );
};

export {GenresList};