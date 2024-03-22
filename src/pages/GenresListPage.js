import {Outlet} from "react-router-dom";

import {GenresList} from "../components";


const GenresListPage = () => {
    return (
        <div>
            <GenresList />
            <Outlet />
        </div>
    );
};

export {GenresListPage};