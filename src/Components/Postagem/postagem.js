
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import {NavLink} from "react-router-dom";
import PostVote from './postVote';
import dayjs from 'dayjs';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 250,
  },
  media: {
    height: 140,
  },
});

export default function PostagemCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{props.title}</Typography>
            <Typography variant="overline" display="block" gutterBottom>{dayjs(props.timestamps).format('DD/MM/YYYY')}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Badge badgeContent={props.voteScore} color="secondary">
              <FavoriteIcon />
          </Badge>
          <Button size="small" color="primary">
            <NavLink exact to={`/postagem/${props.id}`}>Leia Mais</NavLink>
          </Button>
          <PostVote postID={props.id}/>
        </CardActions>
      </Card>
    </Grid>
  );
}