import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#d2d2d2',
  },
}));

const TVShowReview = ({ review }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h5' component='h3' className={classes.root}>
      Review By: {review.author}
      </Typography>
      <Typography variant='h6' component='p' className={classes.root}>
        {review.content}
      </Typography>
    </>
  );
};
export default TVShowReview;
