import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {searchService} from "../../services/searchService";
import {Movie} from "../MoviesContainer/Movie";
import css from './SearchMovieList.module.css'
import {Paginate} from "../PaginateContainer/Paginate";


const SearchMovieList = () => {
    const [searchMovieList, setSearchMovieList] = useState([])
    const [query, setQuery] = useSearchParams({page:'1', name: ''});
    const [totalPage, setTotalPage] = useState({total_pages:null})

    const navigate = useNavigate();

    const onHandleChange = (e) => {
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

                // fetch(`https://api.themoviedb.org/3/search/movie?api_key=3fd56c473d7867b10c519e20c687a265&query=${query.get('name')}&page=${query.get('page')}`)
                //     .then((res) => res.json())
                //     .then((data) =>{
                //     setSearchMovieList(data.results);
                //     setTotalPage({total_pages: data.total_pages})
                // })

    return (
        <div>
            <div>
            <input type="text" placeholder="Search movie..." value={query.get('name')} onChange={onHandleChange}/>
            </div>
            <div className={css.SearchMovieList}>
            {searchMovieList && searchMovieList.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>

            <Paginate page={query.get('page')} totalPage={totalPage.total_pages}/>
        </div>
    );
};

export {SearchMovieList}