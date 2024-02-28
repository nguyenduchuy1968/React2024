import {useEffect, useState} from "react";

import {movieService} from "../../services";
import {Movie} from "./Movie";
import css from './MoviesList.module.css'

const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        movieService.getMoviesByPage(1).then(({data: {results}}) => setMoviesList(results));
    }, ['page']);

    // fetch(`https://api.themoviedb.org/3/discover/movie?page=1&api_key=3fd56c473d7867b10c519e20c687a265`)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    // console.log(movies)

    return (
        <div className={css.MoviesList}>
            {moviesList && moviesList.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};