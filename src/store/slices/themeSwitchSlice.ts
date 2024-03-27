import {createSlice} from "@reduxjs/toolkit";

interface IState {
    mode: boolean
}

const initialState: IState = {
    mode: false
}

const themeSwitchSlice = createSlice({
    name: 'themeSwitchSlice',
    initialState,
    reducers: {
        setThemeSwitch: (state) => {
            state.mode = !state.mode
        }
    }
});

const {reducer: themeSwitchReducer, actions} = themeSwitchSlice

const themeSwitchActions = {
    ...actions
}

export {
    themeSwitchReducer,
    themeSwitchActions
}