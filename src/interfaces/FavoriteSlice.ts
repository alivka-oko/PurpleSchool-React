import { IUser } from './IUser';

export interface FavoriteMovie {
  id: string;
  title: string;
  cover: string;
  rank: number;
}

export interface UserFavorites {
  id?: number;
  movies: FavoriteMovie[];
}

export interface FavoritesState {
  users: UserFavorites[];
}

export interface FavoriteActionPayload {
  user: IUser | null;
  movie: FavoriteMovie;
}
