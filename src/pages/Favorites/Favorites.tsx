import { useSelector } from 'react-redux';
import Cards from '../../components/Cards/Cards';
import { RootState } from '../../store/store';
import Title from '../../components/Title/Title';
import styles from './favorites.module.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user.context';
import { IMovie } from '../../interfaces/IMovie';
import NotFound from '../../components/NotFound/NotFound';

export function Favorites() {
  const currentUser = useContext(UserContext).loggedUser;
  const favoriteState = useSelector((s: RootState) => s.favorites.users);

  const [favList, setFavList] = useState<IMovie[] | undefined>([]);
  useEffect(() => {
    if (favoriteState) {
      setFavList(favoriteState.find((u) => u.id == currentUser?.id)?.movies);
    }
  }, [favoriteState]);
  return (
    <div className={styles['favorite-page']}>
      <Title>Избранное</Title>
      {!favList?.length && <NotFound text='Самое время найти нужный фильм' />}
      {favList && <Cards data={favList} />}
    </div>
  );
}
