import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {searchService} from "../../services";
import {IMovie, IPagination} from "../../interfaces";


interface IState {
    searchMovies: IMovie[],
    total_pages: number,
    inputText: string,
    name: string
}

const initialState: IState = {
    searchMovies: [],
    total_pages: null,
    inputText: '',
    name: ''
}

const getSearchMovies = createAsyncThunk<IPagination<IMovie>, URLSearchParams>(
    'searchSlice/getSearchMovies',
    async (query, {rejectWithValue}) => {
        try {
            const {data} = await searchService.searchMovies(query)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        setSearchMovieName: (state, action) => {
            state.inputText = action.payload
        },

        clearSearchMovieName: (state) => {
            state.inputText = ''
        }
    },
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