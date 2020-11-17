
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
      open: false
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

  handleSubmit = event => {
    event.preventDefault();

    const post = {
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
        console.log(res);
        console.log(res.data);
        this.clearInput();
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
              Postagem cadastrada com sucesso!
            </Alert>
          </Collapse>
        <form onSubmit={this.handleSubmit} noValidate className="form-cadastro" autoComplete="off">
            <Typography className="tittle" variant="h6" gutterBottom>CADASTRAR NOVA POSTAGEM</Typography>
            <TextField className="input-text" id="outlined-basic" name="title" fullWidth label="Titulo" value={this.state.title} onChange={this.handleChangeTitle} variant="outlined" />
            <TextField className="input-text" id="outlined-basic" name="author" fullWidth label="Author" value={this.state.author} onChange={this.handleChangeAuthor} variant="outlined" />
            <TextField className="input-text" id="outlined-basic" name="body" fullWidth label="Body"value={this.state.body} onChange={this.handleChangeBody} variant="outlined" />
            <FormControl variant="outlined" className="control">
              <InputLabel id="demo-simple-select-outlined-label">Categoria</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
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
            <Button variant="contained" type="submit" color="primary">Cadastrar</Button>
        </form>  
      </div>
    )
  }
}