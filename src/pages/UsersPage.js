import React from 'react';
import Users from "../components/UsersContainer/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Users />
            <Outlet />
        </div>
    );
};

export default UsersPage;