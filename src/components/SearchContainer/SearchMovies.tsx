// There are 2 actions here:
//   - Request for searching all movies by name and show them if exists (variable "searchMovies")
//   - handle "inputText" in search field for searching the movies by name. The button "clear" resets search field
import {
    MouseEventHandler,
    useEffect,
    FormEvent
} from "react";
import {useSearchParams} from "react-router-dom";

import {Movie} from "../MoviesContainer";
import {useAppSelector, useAppDispatch} from "../../hooks";
import {searchMovieActions} from "../../store";
import globalCss from "../../globalCss/globalCss_Paginate.module.css";
import css from './SearchMovies.module.css'
import {Paginate} from "../PaginateContainer";

const SearchMovies = () => {
    const {searchMovies, total_pages, inputText} = useAppSelector(state => state.searchMovies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1', name: ''});

    const handleSetSearchMovieName = (e: FormEvent<HTMLInputElement>): void => {
        e.preventDefault()
        dispatch(searchMovieActions.setSearchMovieName(e.currentTarget.value));
        setQuery(prev => {
            prev.set('name', e.currentTarget.value)
            return prev
        })
    }

    const handleClearSearchMovieName: MouseEventHandler = (e): void => {
        e.preventDefault()
        dispatch(searchMovieActions.clearSearchMovieName())
        const inputTarget = e.target as HTMLInputElement;

        setQuery(prev => {
            prev.set('name', inputTarget.value)
            return prev
        })
    }

    useEffect(() => {
        dispatch(searchMovieActions.getSearchMovies(query))

    }, [query, dispatch]);

    return (
        <div>
            <div className={css.SearchMovie_Form}>
                <input
                    type="text"
                    placeholder="filter by title..."
                    value={inputText}
                    onChange={handleSetSearchMovieName}
                />
                <button onClick={handleClearSearchMovieName}>Clear</button>
            </div>
            <div className={css.SearchMovie_List}>
                {searchMovies && searchMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={globalCss.paginate}>
                {searchMovies.length > 0 ? (
                    <div><Paginate page={+query.get('page')} total_pages={total_pages}/></div>) : (
                    <h1>Please, enter the name of movie you are looking for</h1>)}
            </div>
        </div>
    );
};

export {SearchMovies}