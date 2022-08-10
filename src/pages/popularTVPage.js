import React from 'react';
import PageTemplate from '../components/templateActorListPage';
import { getPopularTVShows } from '../api/tmdb-api';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getTVShowImages } from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const PopularActorsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    'actors',
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
export default PopularActorsPage;
