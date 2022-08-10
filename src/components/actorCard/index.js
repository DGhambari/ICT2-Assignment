import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import StarRate from '@material-ui/icons/StarRate';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    backgroundColor: '#0A0F1F',
    color: '#d2d2d4',
  },
  media: { height: 500 },
});

export default function ActorCard({ actor, action }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={
          <Typography variant='h5' component='p'>
            {actor.name}{' '}
          </Typography>
        }
        style={{ height: 70 }}
      />
      <CardMedia
        className={classes.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant='h6' component='p'>
              {'Popularity: '}
              <p></p>
              <StarRate fontSize='medium' />
              {actor.popularity}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/actor/${actor.id}`} style={{ textDecoration: 'none' }}>
          <Button variant='contained' size='medium' color='primary'>
            Actor Bio
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
