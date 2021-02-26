import React, { useState, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PianoRollImage from '../../static/img/pianoroll-screen.png'

export default function PianoRollCard(props) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const [imageHeight, setImageHeight] = useState(385)
  const [style, setStyle] = useState({maxWidth: 500})
  
  useEffect(()=>{
    let imageHeight = matches ? 385 : 193
    setImageHeight(imageHeight)

    let newStyle = {...style}
    newStyle.maxWidth = matches ? 567 : 280
    setStyle(newStyle)
  },[matches])

  return (
    <Card variant="outlined" style={style}>
      <CardActionArea onClick={props.onClick}>
        <img
            src={PianoRollImage}
            alt="pianoroll"
            height={imageHeight}
            />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PianoRoll
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            In the making.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
