import React from 'react';
import PageTemplate from '../components/templateTVShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getSimilarTVShows } from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const SimilarTVShowsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    'similar',
    getSimilarTVShows
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const tvShows = data.results;

//   // These three lines are redundant; we will replace them later.
//   const favourites = tvShow.filter((m) => m.favourite);
//   localStorage.setItem('favourites', JSON.stringify(favourites));

  return (
    <PageTemplate
      title='Similar TV Shows'
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToFavouritesIcon tvShow={tvShow} />;
      }}
    />
  );
};

export default SimilarTVShowsPage;
