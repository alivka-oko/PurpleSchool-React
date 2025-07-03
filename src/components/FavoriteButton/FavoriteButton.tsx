import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import {
  FavoriteMovieState,
  favoritesActions
} from '../../store/favorites.slice';
import cn from 'classnames';
import getActiveUser from '../../helpers/getActiveUser';
import styles from './FavoriteButton.module.css';
export function FavoriteButton({ data }: { data: FavoriteMovieState }) {
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = getActiveUser();
  const addToFavorite = () => {
    dispatch(
      favoritesActions.addToFavorite({
        user: currentUser,
        movie: data
      })
    );
  };

  const favoriteCounter = useSelector((s: RootState) => s.favorites.users);
  const favoriteList = favoriteCounter.find((u) => u.id == currentUser?.id);
  const inFavorite = favoriteList?.movies.find((movie) => movie.id == data.id);
  return (
    <button
      onClick={addToFavorite}
      className={cn(styles['card-favorite-button'], {
        [styles['added']]: inFavorite
      })}
    >
      {inFavorite ? 'В избранном' : 'В избранное'}
    </button>
  );
}
