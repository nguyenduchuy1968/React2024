import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/movies'}>Movies Page </NavLink>
            <NavLink to={'/genres'}>Genres</NavLink>
        </div>
    );
};

export {Header};