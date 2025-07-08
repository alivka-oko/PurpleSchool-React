import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { FavoriteMovie } from '../../interfaces/FavoriteSlice';

function Card({ data }: { data: FavoriteMovie }) {
  return (
    <div className={styles['card']}>
      <div className={styles['card-content']}>
        <div className={styles['card-top']}>
          <div className={styles['card-rating']}>
            <img src='/rating.svg' alt='рейтинг' className={styles['rating']} />
            {data.rank}
          </div>
          <Link to={`/movie/${data.id}`}>
            {data.cover ? (
              <img
                src={data.cover}
                alt={'Постер ' + data.title}
                className={styles['card-image']}
              />
            ) : (
              <>
                {' '}
                <img
                  src={'/imagePlug.png'}
                  alt={'Постер ' + data.title}
                  className={styles['card-image']}
                />
              </>
            )}
          </Link>
        </div>
        <div className={styles['card-bottom']}>
          <div className={styles['card-title']}>{data.title}</div>
          <FavoriteButton data={data}></FavoriteButton>
        </div>
      </div>
      <img src={data.cover} alt='' className={styles['card-bg-image']} />
    </div>
  );
}

export default Card;
