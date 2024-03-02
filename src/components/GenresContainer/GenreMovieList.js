import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {genreService} from "../../services/genreService";
import {Movie} from "../MoviesContainer/Movie";
import css from './GenreMovieList.module.css'
import {Paginate} from "../PaginateContainer/Paginate";


const GenreMovieList = () => {
    const [genreMovieList, setGenreMovieList] = useState([])
    const [totalPage, setTotalPage] = useState({total_pages:null})
    const [query, setQuery] = useSearchParams({page: '1'});
    const {id} = useParams();


    useEffect(() => {
        genreService.getMoviesByGenreId(id, query.get('page')).then(({data: {results}}) => setGenreMovieList(results))
    }, [id, query]);

    return (
        <div className={css.GenreMovieList}>
            {genreMovieList && genreMovieList.map(movie => <Movie key={movie.id} movie={movie}/>)}

            <Paginate page={query.get('page')} totalPage={totalPage.total_pages}/>
        </div>
    );
};

export {GenreMovieList};