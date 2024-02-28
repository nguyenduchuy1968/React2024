import {useEffect, useState} from "react";
import {genreService} from "../../services/genreService";
import {useParams} from "react-router-dom";
import {Movie} from "../MoviesContainer/Movie";

const GenreMovieList = () => {
    const [genreMovieList, setGenreMovieList] = useState([])
    const {id} = useParams();

    useEffect(() => {
        genreService.getMoviesByGenreId(id).then(({data: {results}}) => setGenreMovieList(results))
    }, [id]);

    return (
        <div>
            {genreMovieList && genreMovieList.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {GenreMovieList};