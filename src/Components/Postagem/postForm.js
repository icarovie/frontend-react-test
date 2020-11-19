
import React from 'react';
import Typography from '@material-ui/core/Typography';
import api from '../../Services/api';
import './postagem.css';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

export default class FormPostagem extends React.Component {
  state = {
      title:'',
      author:'',
      body:'',
      category:'',
      open: false,
      postID: this.props.match.params?.id,
      headerTitle: 'Cadastrar Nova Postagem',
      buttonSave: 'Cadastrar',
      fieldSituation: false,
      messageText: 'Postagem cadastrada com sucesso!'
  
  }

  componentDidMount(){
    if(this.state.postID !== undefined){
      this.setState({ headerTitle: 'Editar Postagem'});
      this.setState({ buttonSave: 'Salvar'});
      this.setState({ fieldSituation: true});
      this.getPostData(this.state.postID);
    }
  }

  getPostData = id =>{
    api.get(`/posts/${id}`,{
      headers: {
          'Authorization': 'Qualquer Coisa'
        }
    })
    .then(res => {
      const post= res.data;
      this.setState({ title: post.title });
      this.setState({ body: post.body });
      this.setState({ author: post.author });
      this.setState({ category: post.category });
    })
    .catch((error) => {
      console.error(error)
    })
  }

  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  }

  handleChangeBody = event => {
    this.setState({ body: event.target.value });
  }

  handleChangeAuthor = event => {
    this.setState({ author: event.target.value });
  }

  handleChangeCategory = event => {
    this.setState({ category: event.target.value });
  }

  setOpen = command =>{
    this.setState({open:command})
  }

  clearInput() {
    this.setState({ title: '' });
    this.setState({ body: '' });
    this.setState({ author: '' });
    this.setState({ category: '' });
  }

  createRandomID = () => {
		return '_' + Math.random().toString(36).substr(2, 9);
  }
  
  handlePostCreateOrEdit = event => {
    event.preventDefault();
    if(this.state.postID !== undefined){
      this.handleSubmitEdit();
    } else{
      this.handleSubmitCreate();
    }
  }

  handleSubmitEdit = () => {
    const postEdit = {
      title: this.state.title,
      body: this.state.body
    };
  
    api.put(`/posts/${this.state.postID}`, postEdit, {headers: {
      'Authorization': 'Qualquer Coisa'
    }} )
      .then(res => {
        this.setState({ messageText: 'Postagem editada com sucesso!' });
        this.clearInput();
        this.setOpen(true);
      })
  }

  handleSubmitCreate = event => {
    const post = {
      id: this.createRandomID(),
      title: this.state.title,
      author: this.state.author,
      body: this.state.body,
      category: this.state.category,
      timestamp: Date.now(),
    };

    api.post(`/posts`, post, {headers: {
      'Authorization': 'Qualquer Coisa'
    }} )
      .then(res => {
        this.setOpen(true);
      })
  }
  
  render() {
    return (
      <div>
          <NavLink exact to="/"><Button className="button-back" variant="contained">Voltar</Button></NavLink>
          <Collapse in={this.state.open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    this.setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {this.state.messageText}
            </Alert>
          </Collapse>
        <form onSubmit={this.handlePostCreateOrEdit} noValidate className="form-cadastro" autoComplete="off">
          <Typography className="tittle" variant="h6" gutterBottom>{this.state.headerTitle}</Typography>
          <TextField className="input-text" id="outlined-basic" name="title" fullWidth label="Titulo" value={this.state.title} onChange={this.handleChangeTitle} variant="outlined" />
          <TextField className="input-text" disabled={this.state.fieldSituation} id="outlined-basic" name="author" fullWidth label="Author" value={this.state.author} onChange={this.handleChangeAuthor} variant="outlined" />
          <TextField className="input-text" id="outlined-basic" name="body" fullWidth label="Body"value={this.state.body} onChange={this.handleChangeBody} variant="outlined" />
          <FormControl variant="outlined" className="control">
            <InputLabel id="demo-simple-select-outlined-label">Categoria</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              disabled={this.state.fieldSituation}
              value={this.state.category}
              onChange={this.handleChangeCategory}
              label="Categoria"
            >
              <MenuItem value="">
                <em>Nenhuma</em>
              </MenuItem>
              <MenuItem value={'react'}>React</MenuItem>
              <MenuItem value={'redux'}>Redux</MenuItem>
              <MenuItem value={'udacity'}>Udacity</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" type="submit" color="primary">{this.state.buttonSave}</Button>
        </form>  
      </div>
    )
  }
}