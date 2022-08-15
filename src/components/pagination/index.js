import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      color: 'secondary',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

export default function BasicPagination() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Pagination count={10} /> */}
      <Pagination
        count={10}
        color='primary'
        style={{ alignItems: 'center', justifyContent: 'center' }}
      />
      {/* <Pagination count={10} color="secondary" /> */}
      {/* <Pagination count={10} disabled /> */}
    </div>
  );
}
