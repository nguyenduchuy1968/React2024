import {useNavigate} from "react-router-dom";

import css from './Genre.module.css'
import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const Genre = ({genre}) => {
    const {id, name} = genre;

    const navigate = useNavigate();

    return (
        <div>
            <ul className={css.Genre}>
            <li   onClick={() => navigate(`/genres/${id}`)}> <a>{name}</a></li>
            </ul>
        </div>
    );
};

export {Genre};