import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../services/api';
import {MoviesListState, FetchMoviesResponse, FetchParams} from '../types';

const initialState: MoviesListState = {
  movies: [],
  similar: [],
  loading: false,
  error: true,
};

export const fetchMovies = createAsyncThunk<FetchMoviesResponse, FetchParams>(
  'fetchMovies',
  async (params, {rejectWithValue}) => {
    try {
      const response = await api.getMoviesList({params});
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const fetchSimilarMovies = createAsyncThunk<
  FetchMoviesResponse,
  {id: number; params: FetchParams}
>('fetchSimilarMovies', async ({id, params}, {rejectWithValue}) => {
  try {
    const response = await api.getSimilarMoviesById(id, params);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(fetchSimilarMovies.pending, state => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchSimilarMovies.fulfilled, (state, action) => {
        state.similar = action.payload.results;
        state.loading = false;
      })
      .addCase(fetchSimilarMovies.rejected, state => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default moviesSlice.reducer;
