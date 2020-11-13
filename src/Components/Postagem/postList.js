import React from 'react';
import api from '../../Services/api';
import Postagem from '../Postagem/postagem';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

export default class PostList extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    api.get(`/posts`,{
        headers: {
            'Authorization': 'Qualquer Coisa'
          }
    })
    .then(res => {
    const posts= res.data;
    this.setState({ posts });
    })
    .catch((error) => {
    console.error(error)
    })
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          { this.state.posts.map(posts =><Postagem title={posts.title} body={posts.body} id={posts.id}/>)}
        </Grid>
      </div>
    )
  }
}