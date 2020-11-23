
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default class PostagemExpandida extends React.Component {
  render() {
    return (
      <div className="Comment">
        <Typography variant="subtitle2" className="Comment-Title" gutterBottom>{this.props.author} Escreveu:</Typography>
        <Typography variant="body2" className="Comment-Body" gutterBottom>{this.props.body}</Typography>
        <Divider />
      </div>
    )
  }
}