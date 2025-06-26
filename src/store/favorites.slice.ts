import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '../interfaces/IMovie';

export interface FavoriteState {
  movies: IMovie[];
}

const initialState: FavoriteState = {
  movies: []
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<IMovie>) => {
      const exists = state.movies.find(
        (movie) => movie['#IMDB_ID'] === action.payload['#IMDB_ID']
      );
      if (exists) {
        state.movies = state.movies.filter(
          (movie) => movie['#IMDB_ID'] != action.payload['#IMDB_ID']
        );
        return;
      }
      state.movies.push(action.payload);
    }
  }
});

export default favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;
