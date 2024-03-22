import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    mode: false
}

const themeSwitchSlice = createSlice({
    name: 'themeSwitchSlice',
    initialState,
    reducers: {
        setThemeSwitch: (state, _) => {
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