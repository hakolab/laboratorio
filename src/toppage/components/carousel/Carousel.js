import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay, virtualize } from 'react-swipeable-views-utils'
import { mod } from 'react-swipeable-views-core'
import { Box } from '@material-ui/core'
import StampCard from './StampCard'
import PianoRollCard from './PianoRollCard'

const test = {
  height: "50vh",
  backgroundColor: "grey"
}

const VirtualizeSwipeableViews = virtualize(SwipeableViews)
const AutoPlaySwipeableViews = autoPlay(VirtualizeSwipeableViews)

const Carousel = () => {

  const redirectToStamp = () => {
    window.location.href = "/stamp/"
  }

  const redirectToPianoRoll = () => {
    window.location.href = "/pianoroll/"
  }

  const slideRenderer = (params) => {
    const { index, key } = params;
  
    switch (mod(index, 2)) {
      case 0:
        return (
          <Box key={key} display="flex" justifyContent="center">
            <StampCard onClick={redirectToStamp}/>
          </Box>
        )
      case 1:
        return (
          <Box key={key} display="flex" justifyContent="center">
            <PianoRollCard onClick={redirectToPianoRoll}/>
          </Box>
        )
      default:
        return null;
    }
  }

  return (
    <AutoPlaySwipeableViews slideRenderer={slideRenderer} interval={5000} enableMouseEvents/>
  )
}

export default Carousel