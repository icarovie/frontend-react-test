
import React from 'react';
import Typography from '@material-ui/core/Typography';
import api from '../../Services/api';
import Comentario from '../Comentario/comentario';
import ComentarioForm from '../Comentario/comentarioForm';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import './postagem.css';
import Button from '@material-ui/core/Button';
import {NavLink, Redirect} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import PostVote from './postVote';

export default class PostagemExpandida extends React.Component {
  
  state = {
    post: [],
    comments: [],
    id: this.props.match.params.id,
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  handleDelete = () => {
    api.delete(`/posts/${this.state.id}`,{
      headers: {
          'Authorization': 'Qualquer Coisa'
        }
    })
    .then(res => {
      this.setRedirect();
    })
    .catch((error) => {
      console.error(error)
    })
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
      this.setState({ comments });
    })
    .catch((error) => {
      console.error(error)
    })
  }
  
  render() {
    return (
      <div>
        {this.renderRedirect()}
        <div className="Controls">
        <NavLink exact to="/">
          <Button variant="contained" className="button-back" color="primary" endIcon={<Icon>reply</Icon>}>Voltar</Button>
        </NavLink>
        <NavLink exact to={`/editar/postagem/${this.state.id}`}><Button variant="contained" className="button-edit" color="primary" endIcon={<Icon>edit</Icon>}>Edit</Button></NavLink>
        <Button variant="contained" className="button-delete" color="primary" endIcon={<Icon>delete</Icon>} onClick={this.handleDelete}>Delete</Button>
        </div>  
        <Typography variant="h2" gutterBottom>{this.state.post.title}</Typography>
        <Typography variant="subtitle2" gutterBottom>Author: {this.state.post.author}</Typography>
        <Chip color="primary" label={this.state.post.category}></Chip>
        <Typography variant="body2" className="Post-Body">{this.state.post.body}</Typography>
        <PostVote PostID={this.props.match.params.id}/>

        <Grid item xs={12}>
          <Typography variant="h6" className="Comment-Header" gutterBottom>Comentários</Typography>
          { this.state.comments.map(comments =>
            <Comentario body={comments.body} author={comments.author} />
          )}
          <ComentarioForm postID={this.props.match.params.id} />
        </Grid>
      </div>
    )
  }
}