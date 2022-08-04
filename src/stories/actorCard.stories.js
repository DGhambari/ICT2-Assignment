import React from 'react';
import ActorCard from '../components/actorCard';
import SampleActor from './sampleActorData';
import { MemoryRouter } from 'react-router';
// import MoviesContextProvider from '../contexts/moviesContext';
import { action } from '@storybook/addon-actions';
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites';
import { getActorImages } from '../api/tmdb-api';

export default {
  title: 'Home Page/ActorCard',
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
    // (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ActorCard
      actors={SampleActor}
      action={(actor) => <AddToFavoritesIcon actors={actor} />}
      taging={(actor) => null}
    />
  );
};
Basic.storyName = 'Default';

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleActor, profile_path: undefined };
  return (
    <ActorCard
      actors={sampleNoPoster}
      action={(actor) => <AddToFavoritesIcon actors={actor} />}
      taging={(actor) => null}
    />
  );
};
Exceptional.storyName = 'exception';
