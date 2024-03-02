import {useEffect, useState} from "react";

import {movieService} from "../../services";
import {Movie} from "./Movie";
import css from './MoviesList.module.css'
import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";
import {Paginate} from "../PaginateContainer/Paginate";

const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([])
    // const [prevNext, setPrevNext] = useState({prev:null, next:null})
    const [totalPage, setTotalPage] = useState({total_pages:null})

    // const {trigger} = useAppContext();
    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        movieService.getMoviesByPage(query.get('page'))
            // .then(({data: {results}}) => {
            //     setMoviesList(results)
            //     setPrevNext({prev: results.prev, next: results.next})
            // })
            .then(({data}) => {
                setMoviesList(data.results)
                // setPrevNext({prev: data.results.prev, next: data.results.next})
                setTotalPage({total_pages:data.total_pages})
            })
    }, [query]);

    // const prev = () => {
    //     setQuery(prev => {
    //         prev.set('page', (+prev.get('page') - 1).toString())
    //         return prev
    //     })
    // }
    //
    // const next = () => {
    //     setQuery(prev => {
    //         prev.set('page', (+prev.get('page') + 1).toString())
    //         return prev
    //     })
    // }


    return (
        <div className={css.MoviesList}>
            {moviesList && moviesList.map(movie => <Movie key={movie.id} movie={movie}/>)}

            <Paginate page={query.get('page')}  totalPage={totalPage}/>

            {/*<button disabled={query.get('page') <= '1'} onClick={prev}>prev</button>*/}
            {/*<h4> page{query.get('page')}</h4>*/}
            {/*<button disabled={query.get('page') === totalPage.total_pages} onClick={next}>next</button >*/}
        </div>
    );
};

export {MoviesList};