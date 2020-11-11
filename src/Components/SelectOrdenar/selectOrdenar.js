
/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
});

export default function MediaCard() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

  return (
    <Grid item xs={12}>
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Ordenar Por</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        label="Age"
      >
        <MenuItem value="">
        </MenuItem>
        <MenuItem value={10}>Vote Score</MenuItem>
        <MenuItem value={20}>Data de Criação</MenuItem>
      </Select>
    </FormControl>
  </Grid>
  );
}*/