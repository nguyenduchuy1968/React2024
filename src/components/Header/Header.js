import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {ThemeSwitch} from "../ThemeSwitch";

const Header = () => {

    return (
        <div className={css.Header}>
            <span className={css.Header_logo}>The Best Movies</span>
            <NavLink to={'/movies'}>Movies Page </NavLink>
            <NavLink to={'/genres'}>Genres</NavLink>
            <NavLink to={'/movies/search'}>Search</NavLink>
            <ThemeSwitch />
        </div>
    );
};

export {Header};