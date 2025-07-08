import { useSelector } from 'react-redux';
import Cards from '../../components/Cards/Cards';
import { RootState } from '../../store/store';
import Title from '../../components/Title/Title';
import styles from './favorites.module.css';
import { useEffect, useState } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import getActiveUser from '../../helpers/getActiveUser';
import { FavoriteMovie } from '../../interfaces/FavoriteSlice';

export function Favorites() {
  const currentUser = getActiveUser();
  const favoriteUsersState = useSelector((s: RootState) => s.favorites.users);

  const [favList, setFavList] = useState<FavoriteMovie[] | undefined>([]);
  useEffect(() => {
    if (favoriteUsersState) {
      setFavList(
        favoriteUsersState.find((u) => u.id == currentUser?.id)?.movies
      );
    }
  }, [favoriteUsersState]);
  return (
    <div className={styles['favorite-page']}>
      <Title>Избранное</Title>
      {!favList?.length && <NotFound text='Самое время найти нужный фильм' />}
      {favList && <Cards data={favList} />}
    </div>
  );
}
