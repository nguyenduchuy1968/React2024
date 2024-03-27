//show movie with concrete ID
//creating Star rating and badge with MUI

import Badge from '@mui/material/Badge';
import {FC} from "react";

import {imageBaseUrl, posterSize_infoPage} from "../../constants";
import {StarRating} from "../StarRating";
import {IMovieInfo} from "../../interfaces";
import noImage from '../../lib/noImage.png'
import css from './MovieInfo.module.css'

interface IProps {
    movieInfo: IMovieInfo
}

const MovieInfo: FC<IProps> = ({movieInfo}) => {
    const {original_title, poster_path, vote_average, release_date, runtime, overview} = movieInfo;
    const {genres} = movieInfo;
    const posterFullPath = `${imageBaseUrl}/${posterSize_infoPage}/${poster_path}`;
    // "rating" in the 10-point system but "Star rating" in 5-star system , so we have divide by 2
    const rating = Math.round(vote_average) / 2

    return (
        <div className={css.MovieInfo_container}>
            <div className={css.MovieInfo}>
                <div>
                    <img src={poster_path ? posterFullPath : noImage} alt={original_title}></img>
                </div>
                <div className={css.MovieInfo_desc}>
                    <h1 className={css.MovieInfo_title}> {original_title}</h1>
                    <div> Rating: <StarRating rating={rating}/></div>
                    <div className={css.MovieInfo_action}>
                        <Badge badgeContent={genres && genres.length} color="secondary" anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}>Genre</Badge> :
                        {genres && genres.map(genre =>
                            <div className={css.MovieInfo_genre} key={genre.id}>{genre.name}</div>
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
