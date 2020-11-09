import React from 'react';
import logo from './logo.svg';
import './App.css';
import logoReal from './Assets/cat.png';
import Comentario from './Components/Comentario/comentario';
import Postagem from './Components/Postagem/postagem';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

function App() {

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 140,
      textAlign: "right"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    selected: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  }));

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  

  return (
    <div className="App">
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <img src={logoReal} className="App-logo" />
            <h1>Projeto Leitura</h1>
          </Grid>

          <Grid item xs={12}>
            <Chip avatar={<Avatar>M</Avatar>} label="Ficção Cientifica" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Drama" onClick={handleClick} />
            <Chip avatar={<Avatar>M</Avatar>} label="Comedia" onClick={handleClick} />
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Ordenar Por</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                </MenuItem>
                <MenuItem value={10}>Vote Score</MenuItem>
                <MenuItem value={20}>Data de Criação</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}><Postagem/></Grid>
          <Grid item xs={4}><Postagem/></Grid>
          <Grid item xs={4}><Postagem/></Grid>
        </Grid>
      </Container>
      
    </div>
  );
}

export default App;
