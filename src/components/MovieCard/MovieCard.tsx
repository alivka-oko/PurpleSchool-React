import { MovieCardProps } from './MovieCardProps';
import styles from './MovieCard.module.css';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { NavLink } from 'react-router-dom';

function MovieCard({ data }: MovieCardProps) {
  const dataForFavorite = {
    id: data.top.id,
    title: data.short.name,
    cover: data.short.image
  };

  const convertDate = (day: number, month: number, year: number): string => {
    const date = new Date(year, month - 1, day);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    };

    return date.toLocaleDateString('ru-RU', options).replaceAll('.', '-');
  };
  const convertDuration = (data: string): number => {
    const hour = data.slice(2).split('H')[0];
    const minute = data.slice(2).split('H')[1].split('M')[0];
    return Number(hour) * 60 + Number(minute);
  };

  return (
    <>
      <div className={styles['area']}>
        <NavLink to='/' className={styles['breadcrumb']}>
          Поиск фильмов
        </NavLink>
        <h2 className={styles['title']}>{data.short.name}</h2>
      </div>
      <div className={styles['body']}>
        <div className={styles['left-side']}>
          <img
            src={data.short.image}
            alt={data.short.name}
            className={styles['cover']}
          />
        </div>
        <div className={styles['right-side']}>
          <p className={styles['description']}>{data.short.description}</p>
          <div className={styles['action']}>
            <div className={styles['rating']}>
              {data.main.ratingsSummary.aggregateRating}
            </div>
            {/* <FavoriteButton data={data.imdbId}/> */}
          </div>
          <div className={styles['info-line']}>
            <p className={styles['label']}>Тип</p>
            <p className={styles['text']}>{data.top.titleType.text}</p>
          </div>
          <div className={styles['info-line']}>
            <p className={styles['label']}>Дата выхода</p>
            <p className={styles['text']}>
              {convertDate(
                data.top.releaseDate.day,
                data.top.releaseDate.month,
                data.top.releaseDate.year
              )}
            </p>
          </div>
          {data.short.duration && (
            <div className={styles['info-line']}>
              <p className={styles['label']}>
                Длительность {data.short.duration}
              </p>
              <p className={styles['text']}>
                {convertDuration(data.short.duration)} мин
              </p>
            </div>
          )}
          <div className={styles['info-line']}>
            <p className={styles['label']}>Жанр</p>
            <p className={styles['text']}>
              {data.top.genres.genres.map((i) => i.text + ' ')}
            </p>
          </div>
        </div>
      </div>
      <div className='reviews'>
        <h2 className={styles['small-title']}>Отзывы</h2>
        <div className={styles['area']}>
          <div className={styles['review-card']}>
            <div className={styles['top']}>
              <p className={styles['review-title']}>{data.short.review.name}</p>
              <p className={styles['review-title']}>
                {data.short.review.dateCreated}
              </p>
            </div>
            <p className={styles['review-description']}>
              {data.short.review.reviewBody}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
