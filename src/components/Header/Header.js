import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {SwitchContext, ThemeSwitch} from "../Switch/ThemeSwitch";
import {useContext, useState} from "react";
import {ThemeContext} from "@emotion/react";

const Header = () => {
    // const {checked} = useContext(SwitchContext)

    return (
        <div className={css.Header}>
            <span className={css.Header_logo}>The Best Movies</span>
            <NavLink to={'/movies'}>Movies Page </NavLink>
            <NavLink to={'/genres'}>Genres</NavLink>
            <NavLink to={'/movies/search'}>Search</NavLink>
        </div>
    );
};

export {Header};