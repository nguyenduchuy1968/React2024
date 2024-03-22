import {useNavigate} from "react-router-dom";
import {useState} from "react";

import {StarRating} from "../StarRating";
import css from './Movie.module.css'
import {imageBaseUrl, posterSize} from "../../constants";


const Movie = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie;
    const posterFullPath = `${imageBaseUrl}/${posterSize}/${poster_path}`
    const navigate = useNavigate()
    const [rating, _] = useState(Math.round(vote_average)/2)

    return (
        <div className={css.Movie}>
            <img src={posterFullPath} alt={title} onClick={() => navigate(`/movies/${id}`)} />
            <div> movie name: <span className={css.Movie_span}>{title}</span></div>
            <div><StarRating rating={rating}/></div>
        </div>
    );
};

export {Movie};