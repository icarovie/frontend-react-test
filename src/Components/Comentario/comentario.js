
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import api from '../../Services/api';
import Divider from '@material-ui/core/Divider';
import Comentario from '../Comentario/comentario';
import './comentario.css';

export default class PostagemExpandida extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Comment">
        <Typography variant="subtitle2" className="Comment-Title" gutterBottom>
        {this.props.author} Escreveu:
        </Typography>
        <Typography variant="body2" className="Comment-Body" gutterBottom>
          {this.props.body}
        </Typography>
        <Divider />
      </div>
    )
  }
}