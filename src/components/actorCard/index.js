import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import CalendarIcon from '@material-ui/icons/CalendarTodayTwoTone';
// import StarRateIcon from '@material-ui/icons/StarRate';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
// import { MoviesContext } from '../../contexts/moviesContext';

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {},
});

export default function ActorCard({ actor, action }) {
  const classes = useStyles();
  //   const { favourites } = useContext(MoviesContext);
  //   if (favourites.find((id) => id === movie.id)) {
  //     movie.favourite = true;
  //   } else {
  //     movie.favourite = false;
  //   }

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          actor.name ? <Avatar className={classes.avatar}></Avatar> : null
        }
        title={
          <Typography variant='h5' component='p'>
            {actor.name}{' '}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        // image={
        //   actor.poster_path
        //     ? `https://image.tmdb.org/t/p/w500/${actor.poster_path}`
        //     : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        // }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant='h6' component='p'>
              <CalendarIcon fontSize='small' />
              {actor.birthday}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(actor)}
        <Link to={`/actor/${actor.id}`}>
          <Button variant='outlined' size='medium' color='primary'>
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
