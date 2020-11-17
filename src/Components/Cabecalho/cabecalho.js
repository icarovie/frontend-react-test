
import React from 'react';
import logoReal from '../../Assets/cat.png';
import Grid from '@material-ui/core/Grid';

export default function MediaCard() {
  return (
    <Grid item xs={12}>
        <img src={logoReal} className="App-logo" alt="logo" />
        <h1>Projeto Leitura</h1>
    </Grid>
  );
}