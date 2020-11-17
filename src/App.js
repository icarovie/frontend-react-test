import React, { useState, useEffect} from 'react';
import './App.css';
import PostagemExpandida from './Components/Postagem/postagemExpandida';
import PostList from './Components/Postagem/postList';
import FormPostagem from './Components/Postagem/postForm';
import Cabecalho from './Components/Cabecalho/cabecalho';
import Categorias from './Components/Categoria/categorias';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Container maxWidth="md">
      <Router>
        <Grid container spacing={3}>
          <Cabecalho/>
          <Grid item xs={12}>
            
              <Switch>
                <Route exact path="/">
                  <Categorias/>
                  <PostList/>
                  <NavLink exact to="cadastrar/postagem">
                  <Fab color="primary" aria-label="add">
                    <AddIcon />
                  </Fab>
                  </NavLink>
                </Route>
                <Route exact path="/categoria/:name" component={PostList}></Route>
                <Route exact path="/postagem/:id" component={PostagemExpandida}></Route>
                <Route exact path="/cadastrar/postagem" component={FormPostagem}></Route>
              </Switch>
            
          </Grid>
        </Grid>
        </Router>
      </Container>
    </div>
  );
}

export default App;
