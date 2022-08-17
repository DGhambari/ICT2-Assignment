import React from 'react';
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getSimilarMovies } from '../api/tmdb-api';
import { getMovie } from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const SimilarMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    'similar',
    getSimilarMovies,
    getMovie,
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movie = data.results;

  // // These three lines are redundant; we will replace them later.
  // const favourites = movies.filter((m) => m.favourite);
  // localStorage.setItem('favourites', JSON.stringify(favourites));

  return (
    <PageTemplate
      title='Similar Movies'
      movie={movie}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />;
      }}
    />
  );
};

export default SimilarMoviesPage;
