import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { CardProps } from './CardProps';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { favoritesActions } from '../../store/favorites.slice';
import cn from 'classnames';

function Card({ data }: CardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const addToFavorite = () => {
    dispatch(favoritesActions.addToFavorite(data));
  };
  const movies = useSelector((s: RootState) => s.favorites.movies).find(
    (i) => i['#IMDB_ID'] == data['#IMDB_ID']
  );
  return (
    <div className={styles['card']}>
      <div className={styles['card-content']}>
        <div className={styles['card-top']}>
          <div className={styles['card-rating']}>
            <img src='/rating.svg' alt='рейтинг' className={styles['rating']} />
            {data['#RANK']}
          </div>
          <Link to={`/movie/${data['#IMDB_ID']}`}>
            {data['#IMG_POSTER'] ? (
              <img
                src={data['#IMG_POSTER']}
                alt={'Постер ' + data['#TITLE']}
                className={styles['card-image']}
              />
            ) : (
              <>
                {' '}
                <img
                  src={'/imagePlug.png'}
                  alt={'Постер ' + data['#TITLE']}
                  className={styles['card-image']}
                />
              </>
            )}
          </Link>
        </div>
        <div className={styles['card-bottom']}>
          <div className={styles['card-title']}>{data['#TITLE']}</div>
          <button
            onClick={addToFavorite}
            className={cn(styles['card-favorite-button'], {
              [styles['added']]: movies
            })}
          >           
            {movies ? 'В избранном' : 'В избранное'}
          </button>
        </div>
      </div>
      <img
        src={data['#IMG_POSTER']}
        alt=''
        className={styles['card-bg-image']}
      />
    </div>
  );
}

export default Card;
