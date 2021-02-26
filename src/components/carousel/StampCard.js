import React, { useState, useEffect } from 'react';
import { Box, useTheme, useMediaQuery } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StampImage from '../../static/img/stamp-screen.png'

export default function StampCard(props) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const [imageHeight, setImageHeight] = useState(385)
  const [style, setStyle] = useState({maxWidth: 500})
  
  useEffect(()=>{
    let imageHeight = matches ? 385 : 216
    setImageHeight(imageHeight)

    let newStyle = {...style}
    newStyle.maxWidth = matches ? 500 : 280
    setStyle(newStyle)
  },[matches])

  return (
    <Card variant="outlined" style={style}>
      <CardActionArea onClick={props.onClick}>
        <img
            src={StampImage}
            alt="stamp"
            height={imageHeight}
            />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Stamp
          </Typography>
          <Box width="100%" overflow="wrap">
            <Typography variant="body2" color="textSecondary" component="div">
              A tool for drawing pictures by stamping various shapes in the frame.
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
