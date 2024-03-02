import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/movies'}>Movies Page </NavLink>
            <NavLink to={'/genres'}>Genres</NavLink>
            <NavLink to={'/movies/search'}>Search</NavLink>

        </div>
    );
};

export {Header};