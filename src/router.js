import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

// import MainLayout from "./layouts/MainLayout";
import {PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from './pages'
import {MainLayout} from "./layouts";
// import UsersPage from "./pages/UsersPage";
// import PostsPage from "./pages/PostsPage";
// import UserDetailsPage from "./pages/UserDetailsPage";
// import PostDetailsPage from "./pages/PostDetailsPage";

const router = createBrowserRouter([
    {
        path: '', element:<MainLayout />, children: [
            {
                index: true, element: <Navigate to={'users'} />
            },
            {
                path:'users', element:<UsersPage />
            },
            {
                path:'users/:id', element:<UserDetailsPage />, children:[
                    {
                        path:'posts', element:<PostsPage />
                    }
                ]
            },
            {
                path:'posts/:id', element:<PostDetailsPage />
            }
        ]
    }
]);

export {
    router
}