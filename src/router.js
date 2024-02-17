import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import TodosPage from "./pages/todosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/commentsPage";
// import * as path from "path";
import PostsPage from "./pages/postsPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout />, children: [
            {
                index:true, element:<Navigate to={'todos'} />
            },
            {
                path:'todos', element:<TodosPage />
            },
            {
                path:'albums', element:<AlbumsPage />
            },
            {
                path:'comments', element:<CommentsPage />, children:[
                    {
                        path: 'post', element:<PostsPage />
                    }
                ]
            }
        ]
    }
])

export {
    router
}