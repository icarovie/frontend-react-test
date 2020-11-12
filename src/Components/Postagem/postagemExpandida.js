
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import api from '../../Services/api';
import Divider from '@material-ui/core/Divider';
import Comentario from '../Comentario/comentario';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import './postagem.css';

export default class PostagemExpandida extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    post: [],
    comments: [],
  }

  componentDidMount() {
    api.get(`/posts/${this.props.id}`,{
        headers: {
            'Authorization': 'Qualquer Coisa'
          }
    })
    .then(res => {
      const post= res.data;
      console.log(res.data)
      this.setState({ post });
    })
    .catch((error) => {
      console.error(error)
    })
    
    api.get(`/posts/${this.props.id}/comments`,{
      headers: {
          'Authorization': 'Qualquer Coisa'
        }
    })
    .then(res => {
      const comments= res.data;
      console.log(res.data)
      this.setState({ comments });
    })
    .catch((error) => {
      console.error(error)
    })
  }
  
  render() {
    return (
      <div>
        <Typography variant="h2" gutterBottom>{this.state.post.title}</Typography>
        <Typography variant="subtitle2" gutterBottom>Author: {this.state.post.author}</Typography>
        <Chip color="primary" label={this.state.post.category}></Chip>
        <Typography variant="body2" className="Post-Body">{this.state.post.body}</Typography>
        
        <Grid item xs={12}>
          <Typography variant="h6" className="Comment-Header" gutterBottom>Comentários</Typography>
          { this.state.comments.map(comments =>
            <Comentario body={comments.body} author={comments.author} />
          )}
        </Grid>
      </div>
    )
  }
}