import {Outlet, useNavigate} from "react-router-dom";

import {Header} from "../components";
import {PrevNextNavigate} from "../components/PrevNextNavigate";
import css from './MainLayout.module.css'
import {useContext, useEffect, useState} from "react";
import {SwitchContext, ThemeSwitch} from "../components/Switch/ThemeSwitch";
import {useAppContext} from "../hooks/useAppContext";

// import {ThemeContext, themes} from '../contexts/themeContext'


const MainLayout = () => {
    const {checked} = useContext(SwitchContext)
    const navigate = useNavigate();

    // const [currentTheme, setCurrentTheme] = useState(themes.light)

    // const toggleTheme = () => {
    //     setCurrentTheme((prevCurrentTheme) =>
    //         prevCurrentTheme === themes.light ? themes.dark : themes.light
    //     )
    // }

    //
    // localStorage.setItem('themeSwitch', 'false')
    // // const themeSwitch = localStorage.getItem('themeSwitch')
    //
    // const {trigger} = useAppContext()
    //
    // const checked = localStorage.getItem('themeSwitch')
    // const [themeSwitch, setThemeSwitch] = useState(!!checked)
    // console.log(typeof (themeSwitch));
    // console.log(themeSwitch);
    //
    // const changeSwitch = localStorage.getItem('changeSwitch') || 0
    // console.log(typeof (changeSwitch));
    // useEffect(() => {
    //
    //     // localStorage.setItem('themeSwitch', (!themeSwitch).toString())
    //     //     setThemeSwitch(!themeSwitch)
    //     console.log('changeSwitch31',changeSwitch)
    //
    //     console.log('11111111111111',localStorage.getItem('themeSwitch'));
    //
    // }, ['changeSwitch'])
    //
    //
    // console.log('themeSwitch_last', themeSwitch);
    // console.log('changeSwitch39', changeSwitch);


    // if (checked === true) {
    //     console.log('checked')
    // } else {
    //     console.log('unchecked')
    // }

    return (
        // className={themeSwitch === true ? css.MainLayout_dark : css.MainLayout_light}
        <div className={checked === true ? css.MainLayout_dark : css.MainLayout_light}>
            {/*{console.log('tS222', themeSwitch)}*/}
            {/*<ThemeContext.Provider value={currentTheme}>*/}
            {/*    <button type="button" onClick={toggleTheme}>Toggle</button>*/}
                <Header/>
                <PrevNextNavigate/>
                {/*<ThemeSwitch themeSwitch={setThemeSwitch(!!localStorage.getItem('themeSwitch'))}/>*/}
                <Outlet/>
            {/*</ThemeContext.Provider>*/}
        </div>
    );
};

export {MainLayout};