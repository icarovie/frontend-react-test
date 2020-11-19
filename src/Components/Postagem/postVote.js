import React from 'react';
import api from '../../Services/api';
import './postagem.css';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

export default class PostVote extends React.Component {
  
  state = {
      option: ''
  }

  handleSubmit = () => {
    const vote = {
      option: this.state.option,
    };

    api.post(`/posts/${this.props.postID}`, vote, {headers: {
      'Authorization': 'Qualquer Coisa'
    }} )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  handleChangeUpVote = () => {
    this.setState({ option: 'upVote' });
    this.handleSubmit()
  }

  handleChangeDownVote = () => {
    this.setState({ option: 'downVote' });
    this.handleSubmit()
  }
  
  render() {
    return (
      <div>
        <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={this.handleChangeUpVote}>
                <Icon>thumb_up_alt</Icon>
            </IconButton>
        </label>
        <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={this.handleChangeDownVote}>
                <Icon>thumb_down_alt</Icon>
            </IconButton>
        </label>
      </div>
    )
  }
}












