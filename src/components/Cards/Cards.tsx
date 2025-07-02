import styles from './Cards.module.css';
import Card from '../Card/Card';
import { FavoriteMovieState } from '../../store/favorites.slice';

function Cards({ data }: { data: FavoriteMovieState[] }) {
  return (
    <div className={styles['cards']}>
      {data.map((item) => {
        return <Card data={item} key={item.id.slice(2)} />;
      })}
    </div>
  );
}

export default Cards;
