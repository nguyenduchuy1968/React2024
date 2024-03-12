import {imageBaseUrl, posterSize_infoPage} from "../../constants";
import css from './MovieInfo.module.css'
import {StarRating} from "../StarRating/StarRating";
import {useState} from "react";

const MovieInfo = ({movieInfo}) => {
    const {original_title, backdrop_path, poster_path, vote_average, release_date, runtime, overview} = movieInfo;
    const {genres} = movieInfo;
    const posterFullPath = `${imageBaseUrl}/${posterSize_infoPage}/${poster_path}`
    const [rating, setRating] = useState(Math.round(vote_average)/2)

    return (
        <div className={css.MovieInfo_container}>
            <h1 className={css.MovieInfo_title}> {original_title}</h1>
            <div className={css.MovieInfo}>
                <div>
                    <img src={posterFullPath} alt={original_title}></img>
                </div>
                <div className={css.MovieInfo_desc}>
                    {/*<div> Rating: {vote_average}</div>*/}
                    <div> Rating: <StarRating rating={rating}/></div>
                    <div className={css.MovieInfo_action}>
                        Genre: {genres.map(genre =>
                            <div key={genre.id}>{genre.name}</div>
                        )}
                    </div>
                    <div> release_date: {release_date}</div>
                    <div> runtime: {runtime}</div>
                </div>
            </div>
            <div>
                <p className={css.MovieInfo_content_title}>Movie's short content:</p>
                <p className={css.MovieInfo_content}>{overview}</p>
            </div>
        </div>
    );
};

export {MovieInfo};