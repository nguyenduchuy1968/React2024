import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {searchService} from "../../services/searchService";
import {Movie} from "../MoviesContainer/Movie";
import css from './SearchMovieList.module.css'
import {Paginate} from "../PaginateContainer/Paginate";
import {SearchBar} from "./SearchBar";
import globalCss from "../../globalCss/globalCss_Paginate.module.css";


const SearchMovieList = () => {
    const [searchMovieList, setSearchMovieList] = useState([])
    const [query, setQuery] = useSearchParams({page: '1', name: ''});
    const [totalPage, setTotalPage] = useState({total_pages: null})

    const navigate = useNavigate();

    const onChange = (e) => {
        e.preventDefault()
        setQuery(prev => {
            prev.set('name', e.target.value)
            return prev
        })
    }

    useEffect(() => {
        searchService.searchMovies(query)
            .then(({data}) => {
                console.log(data);
                setSearchMovieList(data.results);
                setTotalPage({total_pages: data.total_pages})
            })
    }, [query]);

    return (
        <div>
            <div>
                <SearchBar value={query.get('name')} onChange={onChange}/>
            </div>
            <div className={css.SearchMovieList}>
                {searchMovieList && searchMovieList.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={globalCss.paginate}>
                {searchMovieList.length > 0 ? (<div><Paginate page={query.get('page')} totalPage={totalPage}/></div>) : (<h1>"Movies not found"</h1>)}
            </div>
        </div>
    );
};

export {SearchMovieList}