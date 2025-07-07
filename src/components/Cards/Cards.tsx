import styles from './Cards.module.css';
import Card from '../Card/Card';
import { FavoriteMovie } from '../../interfaces/FavoriteSlice';
function Cards({ data }: { data: FavoriteMovie[] }) {
  return (
    <div className={styles['cards']}>
      {data.map((item) => {
        return <Card data={item} key={item.id.slice(2)} />;
      })}
    </div>
  );
}

export default Cards;
