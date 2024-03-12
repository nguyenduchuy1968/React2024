import {createContext, useContext, useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {genreService} from "../../services/genreService";
import {Movie} from "../MoviesContainer/Movie";
import {Paginate} from "../PaginateContainer/Paginate";
import css from './GenreMovieList.module.css'
import globalCss from '../../globalCss/globalCss_Paginate.module.css'




const GenreMovieList = () => {
    const [genreMovieList, setGenreMovieList] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [query, setQuery] = useSearchParams({page: '1'});
    const {id} = useParams();



    useEffect(() => {
        genreService.getMoviesByGenreId(id, query.get('page')).then(({data}) => {
            console.log(data);
            setGenreMovieList(data)
            setTotalPage(data.total_pages)
        })
    }, [id, query]);
    console.log('1', totalPage);





    return (
        <div>
            <h1> {totalPage} movies founded</h1>
            <div className={css.GenreMovieList}>
                {/*<GenreBadge quantity={10} Element={(genresList.map(genre => <Genre key={genre.id} genre={genre} />))}/>*/}
                {/*{genreMovieList && genreMovieList.map(movie => <Movie key={movie.id} movie={movie}/>)}*/}

                {genreMovieList.results && genreMovieList.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={globalCss.paginate}>
                <Paginate page={query.get('page')} totalPage={totalPage}/>


            </div>
            {/*// <Paginate page={query.get('page')} totalPage={totalPage.total_pages}/>*/}
        </div>
    );
};

export {
    GenreMovieList
};