import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movieInfo: []
}

const getMovieInfo= createAsyncThunk(
    'movieInfoSlice/getMovieInfo',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieById(id)
            return data
        } catch(err) {
            return rejectWithValue(err.response.data)
        }
    }
)

const movieInfoSlice = createSlice({
    name: 'movieInfoSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovieInfo.fulfilled, (state, action) => {
                state.movieInfo = action.payload
            })
});

const {reducer: movieInfoReducer, actions} = movieInfoSlice;

const movieInfoActions = {
    ...actions,
    getMovieInfo
}

export {
    movieInfoReducer,
    movieInfoActions
}