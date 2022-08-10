import React from 'react';
import TVShowCard from '../components/tvShowCard';
import SampleTVShow from './sampleTVShowData';
import { MemoryRouter } from 'react-router';
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites';

export default {
  title: 'Home Page/TVShowCard',
  component: TVShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <TVShowCard
      tvShow={SampleTVShow}
      action={(tvShow) => <AddToFavoritesIcon tvshow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Basic.storyName = 'Default';

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTVShow, profile_path: undefined };
  return (
    <TVShowCard
      tvShow={sampleNoPoster}
      action={(tvShow) => <AddToFavoritesIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Exceptional.storyName = 'exception';
