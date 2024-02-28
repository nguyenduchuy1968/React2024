import {useEffect, useState} from "react";
import {genreService} from "../../services/genreService";
import {GenresListPage} from "../../pages";
import {Genre} from "./Genre";
import css from './GenresList.module.css'
const GenresList = () => {
    const [genresList, setGenresList] = useState([])

    useEffect(() => {
        genreService.getAll().then(({data:{genres}}) => setGenresList(genres))
    }, []);

    return (
        <div className={css.GenresList}>
            {genresList.map(genre => <Genre key={genre.id} genre={genre} />)}
        </div>
    );
};

export {GenresList};