import {SearchMovieList} from "../components/SearchContainer/SearchMovieList";
import {Outlet} from "react-router-dom";

const SearchMovieListPage = () => {
    return (
        <div>
            SearchMovieListPage

            <SearchMovieList />
            <Outlet />
        </div>
    );
};

export {SearchMovieListPage};