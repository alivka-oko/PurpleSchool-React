import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { RootState } from './store';
import { FAV_PERSISTENT_STATE } from '../helpers/persistentState';
import { FavoriteActionPayload , FavoritesState, UserFavorites } from '../interfaces/FavoriteSlice';

const initialState: FavoritesState = {
  users: loadState<RootState>(FAV_PERSISTENT_STATE)?.favorites.users ?? []
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<FavoriteActionPayload>) => {
      const isExistUser = state.users.find((user) => {
        return user.id === action.payload.user?.id;
      });
      if (!isExistUser) {
        const newUser: UserFavorites = {
          id: action.payload.user?.id,
          movies: [action.payload.movie]
        };
        state.users.push(newUser);
        return;
      }

      const isExistMovie = isExistUser.movies.find(
        (movie) => movie.id === action.payload.movie.id
      );

      if (isExistMovie) {
        state.users.map((user) => {
          if (user.id != action.payload.user?.id) {
            return user;
          }
          const index = user.movies.findIndex(
            (e) => e.id == action.payload.movie.id
          );
          return user.movies.splice(index, 1);
        });
        return;
      }

      state.users.map((user) => {
        if (user.id != action.payload.user?.id) {
          return user;
        }
        return user.movies.push(action.payload.movie);
      });
      console.log(action);
    }
  }
});

export default favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;
