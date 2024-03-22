import {Outlet} from "react-router-dom";
import {Header, PrevNextNavigate} from "../components";
import {useAppSelector} from "../hooks";
import css from './MainLayout.module.css'

const MainLayout = () => {
    const {isLoading} = useAppSelector(state => state.movies)
    const {mode} = useAppSelector(state => state.themeSwitch);

    return (
        // Choosing the theme mode (dark or light) for the site (pl, see component ThemeSwitch)
        <div className={mode === true ? css.MainLayout_dark : css.MainLayout_light}>
            <Header/>
            <PrevNextNavigate />
            {isLoading && <h1>Loading...</h1>}
            <Outlet/>
        </div>
    );
};

export {MainLayout};