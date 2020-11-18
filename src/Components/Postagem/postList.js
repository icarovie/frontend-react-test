import React from 'react';
import api from '../../Services/api';
import Postagem from '../Postagem/postagem';
import Grid from '@material-ui/core/Grid';

export default class PostList extends React.Component {
  state = {
    posts: [],
    category: '',
    requestURL:'/posts'
  }

  /*
  handleCategory = () =>{
    if(this.props.match.params.name !== undefined){
      this.setState({ category: this.props.match.params.name});
      this.setState({ requestURL: `/${this.props.match.params.name}/posts`})
    }

  }*/
  componentDidMount() {
    //this.handleCategory();

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

    console.log(this.posts)
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          { this.state.posts.map(posts =><Postagem title={posts.title} body={posts.body} id={posts.id} voteScore={posts.voteScore}/>)}
        </Grid>
      </div>
    )
  }
}