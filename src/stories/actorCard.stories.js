import React from 'react';
import ActorCard from '../components/actorCard';
import SampleActor from './sampleActorData';
import { MemoryRouter } from 'react-router';
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites';

export default {
  title: 'Home Page/ActorCard',
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <ActorCard
      actor={SampleActor}
      action={(actor) => <AddToFavoritesIcon actor={actor} />}
      taging={(actor) => null}
    />
  );
};
Basic.storyName = 'Default';

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleActor, profile_path: undefined };
  return (
    <ActorCard
      actor={sampleNoPoster}
      action={(actor) => <AddToFavoritesIcon actor={actor} />}
      taging={(actor) => null}
    />
  );
};
Exceptional.storyName = 'exception';
