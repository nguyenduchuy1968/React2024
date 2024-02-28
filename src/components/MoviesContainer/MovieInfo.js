import {imageBaseUrl, posterSize} from "../../constants";

const MovieInfo = ({movieInfo}) => {
    const {original_title, backdrop_path, poster_path, vote_average, release_date, runtime, overview} = movieInfo;
    const {genres} = movieInfo;
    const posterFullPath = `${imageBaseUrl}/${posterSize}/${poster_path}`

    return (
        <div>
            <div> {original_title}</div>
            <img src={posterFullPath} alt={original_title}></img>

            {genres.map(genre =>
                <div key={genre.id}>{genre.name}</div>
            )}
            <div> release_date: {release_date}</div>
            <div> runtime: {runtime}</div>
            <div> Rating: {vote_average}</div>
            <div>{overview}</div>
        </div>
    );
};

export {MovieInfo};