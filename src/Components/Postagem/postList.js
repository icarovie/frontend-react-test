import React from 'react';
import api from '../../Services/api';
import Postagem from '../Postagem/postagem';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import './postagem.css';

export default class PostList extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    let requestURL = '/posts'
    if(this.props.match?.params?.name){
      requestURL = `${this.props.match?.params?.name}/posts`
    }

    api.get(`${requestURL}`,{
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
  }

  renderCategoria = () => {
    if (this.props.match?.params?.name) {
      return <div>
        <Chip color="primary" label={this.props.match?.params?.name}></Chip><br/><br/>
        <NavLink exact to="/">
          <Button variant="contained" className="button-back" color="primary" endIcon={<Icon>reply</Icon>}>Voltar</Button>
        </NavLink>
        </div>
    }
  }

  render() {
    return (
      <div>
        {this.renderCategoria()}
        <Grid container spacing={3}>
          { this.state.posts.map(posts =><Postagem key={posts.id} timestamps={posts.timestamps} title={posts.title} body={posts.body} id={posts.id} voteScore={posts.voteScore}/>)}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(PostList)