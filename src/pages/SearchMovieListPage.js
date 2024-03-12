import {SearchMovieList} from "../components/SearchContainer/SearchMovieList";
import {Outlet} from "react-router-dom";

const SearchMovieListPage = () => {
    return (
        <div>
            <SearchMovieList />
            <Outlet />
        </div>
    );
};

export {SearchMovieListPage};