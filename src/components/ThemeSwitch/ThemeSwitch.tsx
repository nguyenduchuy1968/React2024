//creating component "ThemeSwitch" and putting it component "Header" . The reduce store handles this process
import Switch from '@mui/material/Switch';

import {useAppSelector, useAppDispatch} from "../../hooks";
import {themeSwitchActions} from "../../store";
import css from './ThemeSwitch.module.css'

const ThemeSwitch = () => {
    const {mode} = useAppSelector(state => state.themeSwitch);
    const dispatch = useAppDispatch();
    const handleChange = () => {
        dispatch(themeSwitchActions.setThemeSwitch())
    };

    return (
        <div>
            <span className={css.ThemeSwitch_title}><strong>Theme mode: </strong></span>
            <Switch className={css.ThemeSwitch}
                    checked={mode}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'controlled'}}
            />
        </div>
    );
};

export {
    ThemeSwitch
};