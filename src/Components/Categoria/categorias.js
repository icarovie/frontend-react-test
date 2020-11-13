import React from 'react';
import api from '../../Services/api';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import './categorias.css';

export default class Categorias extends React.Component {
  state = {
    categories: []
  }

  componentDidMount() {
    api.get(`/categories`,{
        headers: {
            'Authorization': 'Qualquer Coisa'
          }
    })
    .then(res => {
    const categories= res.data;
    this.setState({categories: categories.categories });
    })
    .catch((error) => {
    console.error(error)
    })
  }

  render() {
    return (
        <Grid className="categorias" item xs={12}>
            { this.state.categories.map(categories =>
                <NavLink className="categorias-link" exact to={`categoria/${categories.path}`}><Chip label={categories.name}/></NavLink>
            )}
        </Grid>
    )
  }
}