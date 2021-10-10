import {configureStore, combineReducers} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import moviesSlice from './features/moviesSlice';

const rootReducer = combineReducers({
  movies: moviesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
