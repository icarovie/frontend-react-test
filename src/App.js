import React, { useState, useEffect} from 'react';
import './App.css';

import Postagem from './Components/Postagem/postagem';
import PostagemExpandida from './Components/Postagem/postagemExpandida';
import PostList from './Components/Postagem/postList';
import Cabecalho from './Components/Cabecalho/cabecalho';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import api from './Services/api';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

function App() {

  const [categories, setCategories] = useState("");
  /*
  useEffect(() => {
    api.get('/categories', {
      headers: {
        'Authorization': 'Qualquer Coisa'
      }
    })
    .then((res) => {
      setCategories(res.data)
      console.log(categories)
    })
    .catch((error) => {
      console.error(error)
    })
  });*/

  // Estilos
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

  // Metodos
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // API
  

  // HTML
  return (
    <div className="App">
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Cabecalho/>
        
          <Grid item xs={12}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Grid item xs={12}>
                    <NavLink exact to="/categoria"><Chip avatar={<Avatar>1</Avatar>} label="Categoria 1" ></Chip></NavLink>
                    <NavLink exact to="/categoria"><Chip avatar={<Avatar>2</Avatar>} label="Categoria 2"></Chip></NavLink>
                    <NavLink exact to="/postagem"><Chip avatar={<Avatar>3</Avatar>} label="Categoria 3" ></Chip></NavLink>
                  </Grid>

                  <PostList/>
                </Route>
                <Route exact path="/categoria">
                  
                </Route>
                <Route exact path="/postagem">
                  <PostagemExpandida/>
                </Route>
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  );
}

export default App;
