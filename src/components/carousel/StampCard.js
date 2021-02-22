import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StampImage from '../../static/img/stamp-screen-m.png'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function StampCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={props.onClick}>
        <CardMedia
          component="img"
          alt="Stamp"
          //width="600"
          height="385"
          image={StampImage}
          title="Stamp"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Stamp
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A tool for drawing pictures by stamping various shapes in the frame.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
