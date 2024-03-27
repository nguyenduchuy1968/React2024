import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {movieService} from "../../services";
import {IMovie} from "../../interfaces";
import {IPagination} from '../../interfaces'


interface IState {
    moviesList: IMovie[],
    total_pages: number,
    page: number,
    dataError: string
}

const initialState: IState = {
    moviesList: [],
    total_pages: null,
    page: 1,
    dataError: ''
}

const getAllMovies = createAsyncThunk<IPagination<IMovie>, number>(
    'moviesSlice/getAllMovies',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            const err = e as AxiosError

            return rejectWithValue(err.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {page, results, total_pages} = action.payload
                state.page = page
                state.moviesList = results
                state.total_pages = total_pages
            })
            .addCase(getAllMovies.rejected, state => {
                state.dataError = 'Something went wrong ! Please, check internet connection'
            })
    }
});


const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getAllMovies
}

export {
    moviesReducer,
    moviesActions
}