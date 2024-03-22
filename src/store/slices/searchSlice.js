import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {searchService} from "../../services";


const initialState = {
    searchMovies: [],
    total_pages: null
}

const getSearchMovies = createAsyncThunk(
    'searchSlice/getSearchMovies',
    async (query, {rejectedWithValue}) => {
        try{
            const {data} = await searchService.searchMovies(query)
            return data
        } catch(err) {
            return rejectedWithValue(err.response.data)
        }
    }
)

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getSearchMovies.fulfilled, (state, action) => {
                state.total_pages = action.payload.total_pages
                state.searchMovies = action.payload.results
            })
});

const {reducer: searchMovieReducer, actions} = searchSlice

const searchMovieActions = {
    ...actions,
    getSearchMovies
}

export {
    searchMovieActions,
    searchMovieReducer
}