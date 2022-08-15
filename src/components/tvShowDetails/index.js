import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StarRate from '@material-ui/icons/StarRate';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';
import TVShowReviews from '../tvShowReviews';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#d2d2d2',
  },
  chipRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(1.5),
    margin: 0,
    backgroundColor: '#0A0F1F',
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: 'fixed',
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const TVShowDetails = ({ tvShow }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Link to={`/tv/${tvShow.id}/similar`} style={{ textDecoration: 'none' }}>
        <Button variant='contained' size='medium' color='primary'>
          Similar Shows
        </Button>
      </Link>
      <p></p>
      <Typography variant='h5' component='h3' className={classes.root}>
        Overview
      </Typography>
      <Typography variant='h6' component='p' className={classes.root}>
        {tvShow.overview}
      </Typography>
      <div className={classes.chipRoot}>
        <Paper component='ul' className={classes.chipSet}>
          <li>
            <Chip
              label='Genres'
              className={classes.chipLabel}
              color='primary'
            />
          </li>
          {tvShow.genres.map((g) => (
            <li key={g.name}>
              <Chip label={g.name} className={classes.chip} />
            </li>
          ))}
        </Paper>
        <Paper component='ul' className={classes.chipSet}>
          <Chip
            icon={<AccessTimeIcon />}
            label={`Run Time: ${tvShow.episode_run_time} min.`}
          />
          <Chip
            icon={<StarRate />}
            label={`${tvShow.vote_average} (${tvShow.vote_count}`}
          />
          <Chip label={`First Aired: ${tvShow.first_air_date}`} />
        </Paper>
      </div>
      <Fab
        color='secondary'
        variant='extended'
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>

      <Drawer
        anchor='top'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <TVShowReviews tvShow={tvShow} />
      </Drawer>
    </>
  );
};
export default TVShowDetails;
