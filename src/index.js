import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";


import './index.css';
import {router} from "./router";
import {ContextProvider} from "./hoc";
import {ThemeSwitch} from "./components/Switch/ThemeSwitch";
import {useState} from "react";



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <ContextProvider>
        <ThemeSwitch>


            <RouterProvider router={router}/>

        </ThemeSwitch>
    </ContextProvider>
);

