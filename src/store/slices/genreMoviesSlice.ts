import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {genreService} from "../../services";
import {IMovie, IPagination} from "../../interfaces";

interface IState {
    genreMovies: IMovie[],
    total_pages: number,
    page: number
}

const initialState:IState = {
    genreMovies: [],
    total_pages: null,
    page: 1
}

const getGenreMovies = createAsyncThunk<IPagination<IMovie>, { id:string, page:number }>(
    'genreMoviesSlice/getGenreMovies',
    async ({id,page}, {rejectWithValue}) => {
        try{
        const {data} = await genreService.getMoviesByGenreId(id, page)
        return data
        } catch(e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
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