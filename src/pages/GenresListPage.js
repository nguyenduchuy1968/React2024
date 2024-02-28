import {GenresList} from "../components";
import {Outlet} from "react-router-dom";


const GenresListPage = () => {

    return (
        <div>
            GenresListPage
            <GenresList />
            <Outlet />
        </div>
    );
};

export {GenresListPage};