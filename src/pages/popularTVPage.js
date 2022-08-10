import React from 'react';
import PageTemplate from '../components/templateTVShowListPage';
import { getPopularTVShows } from '../api/tmdb-api';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getTVShowImages } from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const PopularTVShowPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    'tvShow',
    getPopularTVShows,
    getTVShowImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShow = data.results;

  return (
    <PageTemplate
      title='Popular TV Shows'
      tvShow={tvShow}
      action={(tvShow) => {
        return <AddToFavouritesIcon tvShow={tvShow} />;
      }}
    />
  );
};
export default PopularTVShowPage;
