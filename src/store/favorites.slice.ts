import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '../interfaces/IMovie';
import { IUser } from '../interfaces/IUser';
import { loadState } from './storage';

export interface UserFavoriteState {
  id?: number;
  movies: IMovie[];
}

export interface FavoriteState {
  users: UserFavoriteState[];
}
export interface FavoriteLoadState {
  favorite: FavoriteState;
}

export interface Actions {
  user: IUser | null;
  movie: IMovie;
}
export const FAV_PERSISTENT_STATE = 'favorite';

const initialState: FavoriteState = {
  users:
    loadState<FavoriteLoadState>(FAV_PERSISTENT_STATE)?.favorite.users ?? []
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Actions>) => {
      const isExistUser = state.users.find((user) => {
        return user.id === action.payload.user?.id;
      });
      if (!isExistUser) {
        const newUser: UserFavoriteState = {
          id: action.payload.user?.id,
          movies: [action.payload.movie]
        };
        state.users.push(newUser);
        return;
      }

      const isExistMovie = isExistUser.movies.find(
        (movie) => movie['#IMDB_ID'] === action.payload.movie['#IMDB_ID']
      );

      if (isExistMovie) {
        state.users.map((user) => {
          if (user.id != action.payload.user?.id) {
            return user;
          }
          const index = user.movies.findIndex(
            (e) => e['#IMDB_ID'] == action.payload.movie['#IMDB_ID']
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
