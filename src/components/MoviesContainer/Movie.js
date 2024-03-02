import css from './Movie.module.css'
import {imageBaseUrl, posterSize} from "../../constants";
import {useNavigate} from "react-router-dom";

const Movie = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;
    const posterFullPath = `${imageBaseUrl}/${posterSize}/${poster_path}`

    const navigate = useNavigate()

    return (
        <div className={css.Movie}>
            <img src={posterFullPath} alt={title} onClick={() => navigate(`/movies/${id}`)}></img>
            <div> rating: {vote_average}</div>
            <div> title: {title}</div>
            <div> id: {id}</div>
        </div>
    );
};

export {Movie};