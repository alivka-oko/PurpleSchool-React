import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '../interfaces/IMovie';
import { IUser } from '../interfaces/IUser';
import { loadState } from './storage';
import { RootState } from './store';

export interface UserFavoriteState {
  id?: number;
  movies: FavoriteMovieState[];
}

export interface FavoriteState {
  users: UserFavoriteState[];
}

export interface FavoriteMovieState {
  id: string;
  title: string;
  cover: string;
  rank: number;
}

export interface Actions {
  user: IUser | null;
  movie: FavoriteMovieState;
}
export const FAV_PERSISTENT_STATE = 'favorite';

const initialState: FavoriteState = {
  users: loadState<RootState>(FAV_PERSISTENT_STATE)?.favorites.users ?? []
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
