import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {movieService} from "../../services";
import {IMovie} from "../../interfaces";

interface IState {
    movieInfo: IMovie,
    dataError: string
}

const initialState: IState = {
    movieInfo: null,
    dataError: ''
}

const getMovieInfo = createAsyncThunk<IMovie, number>(
    'movieInfoSlice/getMovieInfo',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
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