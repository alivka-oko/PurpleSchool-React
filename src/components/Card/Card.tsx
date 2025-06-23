import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { CardProps } from './CardProps';

function Card({ data }: CardProps) {
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
          <button className={styles['card-favorite-button']}>
            <img src='/like.svg' alt='в избранное' /> В избранное
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
