import React, {useEffect, useState} from 'react';
import {Movie} from "../components";
import {MovieInfo} from "../components";
import {useParams} from "react-router-dom";
import {movieService} from "../services";

const MovieInfoPage = () => {
    const [movieInfo, setMovieInfo] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        movieService.getMovieById(id).then(({data}) => setMovieInfo(data));
    }, [id])
    return (
        <div>
            {movieInfo && <MovieInfo movieInfo={movieInfo} />}

        </div>
    );
};

export {MovieInfoPage};