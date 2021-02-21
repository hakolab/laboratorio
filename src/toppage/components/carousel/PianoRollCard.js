import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PianoRollImage from '../../../static/img/pianoroll-screen-m.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 570,
  },
});

export default function PianoRollCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={props.onClick}>
        <CardMedia
          component="img"
          alt="PianoRoll"
          height="385"
          image={PianoRollImage}
          title="PianoRoll"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PianoRoll
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            In the making.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
