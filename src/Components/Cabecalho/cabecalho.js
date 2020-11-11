
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logoReal from '../../Assets/cat.png';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
        <img src={logoReal} className="App-logo" />
        <h1>Projeto Leitura</h1>
    </Grid>
  );
}