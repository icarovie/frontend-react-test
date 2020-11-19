
import React from 'react';
import Typography from '@material-ui/core/Typography';
import api from '../../Services/api';
import './comentario.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

export default class FormPostagem extends React.Component {
  
  state = {
      author:'',
      body:'',
      parentId: this.props.postID,
      open: false
  }

  handleChangeAuthor = event => {
    this.setState({ author: event.target.value });
  }

  handleChangeBody = event => {
    this.setState({ body: event.target.value });
  }

  setOpen = command =>{
    this.setState({open:command})
  }

  clearInput() {
    this.setState({ body: '' });
    this.setState({ author: '' });
	}
	
	createRandomID = () => {
		return '_' + Math.random().toString(36).substr(2, 9);
	}

  handleSubmit = event => {
    event.preventDefault();

    const comment = {
    	id: this.createRandomID(),
      author: this.state.author,
      body: this.state.body,
      parentId: this.state.parentId,
      timestamp: Date.now(),

    };

    api.post(`/comments`, comment, {headers: {
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
              Comentario adicionado com sucesso!
            </Alert>
          </Collapse>
        <form onSubmit={this.handleSubmit} noValidate className="form-cadastro" autoComplete="off">
            <Typography className="tittle" variant="h6" gutterBottom></Typography>
            <TextField className="input-text" id="outlined-basic" name="author" fullWidth label="Adicione um comentario" value={this.state.body} onChange={this.handleChangeBody} variant="outlined" />
            <TextField className="input-text" id="outlined-basic" name="title" fullWidth label="Seu nome" value={this.state.author} onChange={this.handleChangeAuthor} variant="outlined" />
            
            <Button variant="contained" type="submit" color="primary">Adicionar</Button>
        </form>  
      </div>
    )
  }
}