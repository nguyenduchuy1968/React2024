import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Movie} from "../MoviesContainer";
import {Paginate} from "../PaginateContainer";
import {SearchBar} from "./SearchBar";
import {useAppSelector, useAppDispatch} from "../../hooks";
import {searchMovieActions} from "../../store";
import globalCss from "../../globalCss/globalCss_Paginate.module.css";
import css from './SearchMovieList.module.css'


const SearchMovieList = () => {
    const {searchMovies, total_pages} = useAppSelector(state => state.searchMovies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1', name: ''});
    const onChange = (e) => {
        e.preventDefault()
        setQuery(prev => {
            prev.set('name', e.target.value)
            return prev
        })
    }

    useEffect(() => {
        dispatch(searchMovieActions.getSearchMovies(query))
    }, [query, dispatch]);

    return (
        <div>
            <div>
                <SearchBar value={query.get('name')} onChange={onChange}/>
            </div>
            <div className={css.SearchMovieList}>
                {searchMovies && searchMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={globalCss.paginate}>
                {searchMovies.length > 0 ? (<div><Paginate page={query.get('page')} total_pages={total_pages}/></div>) : (<h1>Please, enter the name of movie you are looking for</h1>)}
            </div>
        </div>
    );
};

export {SearchMovieList}