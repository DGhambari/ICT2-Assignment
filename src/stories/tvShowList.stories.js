import React from 'react';
import TVShowList from '../components/tvShowList';
import SampleTVShow from './sampleTVShowData';
import { MemoryRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';

export default {
  title: 'Home Page/TVShowList',
  component: TVShowList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  const tvShow = [
    { ...SampleTVShow, id: 1 },
    { ...SampleTVShow, id: 2 },
    { ...SampleTVShow, id: 3 },
    { ...SampleTVShow, id: 4 },
    { ...SampleTVShow, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TVShowList tvShow={tvShow} />
    </Grid>
  );
};
Basic.storyName = 'Default';
