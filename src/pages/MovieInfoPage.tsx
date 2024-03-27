import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppSelector, useAppDispatch} from "../hooks";
import {MovieInfo} from "../components";
import {movieInfoActions} from "../store";

const MovieInfoPage = () => {
    const {movieInfo} = useAppSelector(state => state.movieInfo);
    let {id} = useParams();

    const dispatch = useAppDispatch();
    //
    useEffect(() => {
        dispatch(movieInfoActions.getMovieInfo(+id))
    }, [id, dispatch])

    return (
        <div>
            {movieInfo && <MovieInfo movieInfo={movieInfo}/>}
        </div>
    );
};

export {MovieInfoPage};