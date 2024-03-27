import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {genreService} from "../../services";
import {IGenre} from "../../interfaces";
import {IPagination} from "../../interfaces";

interface IState {
    genresList: IGenre[],
    dataError: string
}

const initialState: IState = {
    genresList: [],
    dataError: ''
}

const getGenresList = createAsyncThunk<IPagination<IGenre>, number>(
    'genresSlice/getGenresList',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllGenres(page)
            return data
        } catch (e) {
            const err = e as AxiosError
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
                const {genres} = action.payload
                state.genresList = genres
            })
            .addCase(getGenresList.rejected, state => {
                state.dataError = 'Something went wrong ! Please, check internet connection'
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