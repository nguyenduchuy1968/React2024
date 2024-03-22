import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";


const initialState = {
    genreMovies: [],
    total_pages: null,
    page: '1'
}

const getGenreMovies = createAsyncThunk(
    'genreMoviesSlice/getGenreMovies',
    async ({id, page}, {rejectWithValue}) => {
        const {data} = await genreService.getMoviesByGenreId(id, page)
        return data
    }
)

const genreMoviesSlice = createSlice({
    name: 'genreMoviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenreMovies.fulfilled, (state, action) => {
                const {page, results, total_pages} = action.payload
                state.genreMovies = results
                state.page = page
                state.total_pages = total_pages
            })
});

const {reducer: genreMoviesReducer, actions} = genreMoviesSlice

const genreMoviesActions = {
    ...actions,
    getGenreMovies
}

export {
    genreMoviesReducer,
    genreMoviesActions
}