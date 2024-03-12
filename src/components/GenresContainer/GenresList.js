import {useContext, useEffect, useState} from "react";
import * as React from 'react';
import Badge from '@mui/material/Badge';

import {genreService} from "../../services/genreService";
import {GenresListPage} from "../../pages";
import {Genre} from "./Genre";
import css from './GenresList.module.css'
import {GenreBadge} from "../GenreBadge/GenreBadge";



const GenresList = () => {
    const [genresList, setGenresList] = useState([])



    useEffect(() => {
        genreService.getAll().then(({data: {genres}}) =>
            setGenresList(genres)
        )
    }, []);


    return (
        <div className={css.GenresList}>

            {genresList && genresList.map(genre => <Genre key={genre.id} genre={genre} />)}
            {/*<Element color="action" />*/}

            {/*<GenreBadge quantity={10} Element={(genresList.map(genre => <Genre key={genre.id} genre={genre} />))}/>*/}
            {/*{genresList.map(genre => <Genre key={genre.id} genre={genre} />)}*/}
        </div>
    );
};

export {GenresList};