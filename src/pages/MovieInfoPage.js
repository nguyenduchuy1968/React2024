import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppSelector, useAppDispatch} from "../hooks";
import {movieInfoActions} from "../store";
import {MovieInfo} from "../components";

const MovieInfoPage = () => {
    const {movieInfo} = useAppSelector(state => state.movieInfoReducer);
    let {id} = useParams();

    const dispatch = useAppDispatch();
    //
    useEffect(() => {
        dispatch(movieInfoActions.getMovieInfo(Number(id)))
    }, [id, dispatch])

    return (
        <div>
            {movieInfo && <MovieInfo movieInfo={movieInfo} />}
        </div>
    );
};

export {MovieInfoPage};