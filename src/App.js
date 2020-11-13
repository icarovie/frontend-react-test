import React, { useState, useEffect} from 'react';
import './App.css';
import PostagemExpandida from './Components/Postagem/postagemExpandida';
import PostList from './Components/Postagem/postList';
import Cabecalho from './Components/Cabecalho/cabecalho';
import Categorias from './Components/Categoria/categorias';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import api from './Services/api';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Cabecalho/>
          <Grid item xs={12}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Categorias/>
                  <PostList/>
                </Route>
                <Route exact path="/categoria/:name" component={PostList}></Route>
                <Route exact path="/postagem/:id" component={PostagemExpandida}></Route>
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
