import * as React from 'react';
import Switch from '@mui/material/Switch';
import {createContext, useState} from "react";

import css from './ThemeSwitch.module.css'

const SwitchContext = createContext(null)
const ThemeSwitch = ({children}) => {
    const [checked, setChecked] = useState(false);
    // localStorage.setItem('changeSwitch', checked.toString())

    const handleChange = (event) => {
        setChecked(event.target.checked);
        // localStorage.setItem('changeSwitch', checked.toString())
        // localStorage.setItem('themeSwitch', checked.toString())
    };

// if (checked === true) {
//         console.log('changeSwitch18', localStorage.getItem('changeSwitch'))
//     } else {
//         console.log('changeSwitch20', localStorage.getItem('changeSwitch'))
//     }


    return (
        <div className={css.ThemeSwitch}>
            <span><strong>Theme mode: </strong></span>
            <SwitchContext.Provider value={{checked}}>
                <Switch className={css.ThemeSwitch_sticky}
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{'aria-label': 'controlled'}}

                />
                {children}
            </SwitchContext.Provider>
        </div>
    );
};

export {
    ThemeSwitch,
    SwitchContext
};