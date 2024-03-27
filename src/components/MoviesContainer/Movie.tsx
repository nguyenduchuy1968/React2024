//creating movies , which are rendering in the movies's list page
//creating Star rating with MUI
import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {imageBaseUrl, posterSize} from "../../constants";
import css from './Movie.module.css'
import {StarRating} from "../StarRating";
import noImage from '../../lib/noImage.png'

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, original_title, poster_path, vote_average} = movie;
    const posterFullPath = `${imageBaseUrl}/${posterSize}/${poster_path}`
    const navigate = useNavigate()
    const [rating, _] = useState(Math.round(vote_average) / 2)

    return (
        <div>
            <img src={poster_path ? posterFullPath : noImage} alt={original_title}
                 onClick={() => navigate(`/movies/${id}`)}/>
            <div> movie name: <span className={css.Movie_span}>{original_title}</span></div>
            <div><StarRating rating={rating}/></div>
        </div>
    );
};

export {Movie};