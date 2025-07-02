import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { IMovieDetails } from '../../interfaces/IMovieDetails';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import MovieCard from '../../components/MovieCard/MovieCard';

export function Movie() {
  const { data } = useLoaderData() as { data: IMovieDetails };
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await
          resolve={data}
          errorElement={<ErrorPage message='Не удалось загрузить данные' />}
        >
          {(movie) => {
            return <MovieCard data={movie} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}
