import { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import SearchArea from '../../components/SearchArea/SearchArea';
import { IMovie } from '../../interfaces/IMovie';
import { PREFIX_URL } from '../../helpers/api';
import axios from 'axios';
import { Loading } from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import { ErrorPage } from '../ErrorPage/ErrorPage';

export function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [error, setError] = useState<string | null>();
  const [wasSearched, setWasSearched] = useState(false);
  async function getMovies() {
    try {
      setIsLoading(true);
      setError(null);
      const { data } = await axios.get<{
        description: IMovie[];
        usage: string;
      }>(`${PREFIX_URL}/?q=${searchQuery}`);
      if (!data.description) {
        throw new Error(data.usage);
      }
      setMovies(data.description);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      if (axios.isAxiosError(e)) {
        console.log('Ошибка ' + e.message);
        setError(e.message);
      } else if (e instanceof Error) {
        setError(e.message);
      }
      setMovies([]);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (searchQuery) {
      setWasSearched(true);
      getMovies();
    }
  }, [searchQuery]);

  return (
    <>
      <SearchArea searchQuery={setSearchQuery} />
      {isLoading && <Loading />}
      {error && <ErrorPage message={error} />}
      {!isLoading && !searchQuery && <></>}
      {!isLoading && searchQuery && movies.length > 0 && (
        <Cards data={movies} />
      )}
      {!isLoading &&
        !error &&
        wasSearched &&
        searchQuery &&
        movies.length === 0 && <NotFound />}
    </>
  );
}
