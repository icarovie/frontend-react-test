
import React from 'react';
import Typography from '@material-ui/core/Typography';
import api from '../../Services/api';
import Comentario from '../Comentario/comentario';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import './postagem.css';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import TextField from '@material-ui/core/TextField';

export default class PostagemExpandida extends React.Component {
  
  state = {
    post: [],
    comments: [],
    id: this.props.match.params.id
  }

  componentDidMount() {
    // Posts
    api.get(`/posts/${this.state.id}`,{
      headers: {
          'Authorization': 'Qualquer Coisa'
        }
    })
    .then(res => {
      const post= res.data;
      this.setState({ post });
    })
    .catch((error) => {
      console.error(error)
    })
    
    // Comentarios do Post
    api.get(`/posts/${this.state.id}/comments`,{
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
        <NavLink exact to="/"><Button className="button-back" variant="contained">Voltar</Button></NavLink>
        <Typography variant="h2" gutterBottom>{this.state.post.title}</Typography>
        <Typography variant="subtitle2" gutterBottom>Author: {this.state.post.author}</Typography>
        <Chip color="primary" label={this.state.post.category}></Chip>
        <Typography variant="body2" className="Post-Body">{this.state.post.body}</Typography>
        
        <Grid item xs={12}>
          <Typography variant="h6" className="Comment-Header" gutterBottom>Comentários</Typography>
          { this.state.comments.map(comments =>
            <Comentario body={comments.body} author={comments.author} />
          )}

        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" fullWidth label="Adicione um Comentario" variant="outlined" />
        </form>
        </Grid>
      </div>
    )
  }
}