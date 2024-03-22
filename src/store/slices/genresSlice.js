import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";


const initialState = {
    genresList: []
}

const getGenresList = createAsyncThunk(
    'genresSlice/getGenresList',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllGenres(page)
            return data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getGenresList.fulfilled, (state, action) => {
                state.genresList = action.payload.genres
            })
});

const {reducer: genresReducer, actions} = genresSlice

const genresActions = {
    ...actions,
    getGenresList
}

export {
    genresReducer,
    genresActions
}