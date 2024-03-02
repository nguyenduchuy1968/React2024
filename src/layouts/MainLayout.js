import {Outlet, useNavigate} from "react-router-dom";
import {Header} from "../components/Header/Header";
import SearchMovieList from "../components/SearchContainer/SearchMovieList";

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            {/*<SearchMovieList />*/}
            <button onClick={() => navigate(-1)}> Prev</button>
            <button onClick={() => navigate(1)}> Next</button>
            <Outlet />
        </div>
    );
};

export {MainLayout};