import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    moviesList: [],
    total_pages: null,
    page: null
}

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies(page)
            return data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {page, results, total_pages} = action.payload
                state.page = page
                state.moviesList = results
                state.total_pages = total_pages
            })
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