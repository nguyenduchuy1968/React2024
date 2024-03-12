import css from './Movie.module.css'
import {imageBaseUrl, posterSize} from "../../constants";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {StarRating} from "../StarRating/StarRating";


const Movie = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;

    const posterFullPath = `${imageBaseUrl}/${posterSize}/${poster_path}`
    const navigate = useNavigate()
    const [rating, setRating] = useState(Math.round(vote_average)/2)

    return (
        <div className={css.Movie}>
            <img src={posterFullPath} alt={title} onClick={() => navigate(`/movies/${id}`)}></img>

            <div> movie name: <span className={css.Movie_span}>{title}</span></div>
            <div><StarRating rating={rating}/></div>
            {/*<div> rating: {vote_average}</div>*/}
            {/*<div> id: {id}</div>*/}
        </div>
    );
};

export {Movie};