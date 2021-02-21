import React, { Fragment } from 'react'
import '../static/css/grobal.css'
import { Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/header/Header'
import Carousel from './components/carousel/Carousel'

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
  carousel: {
    paddingTop: "16px"
  },
})

const App = () => {
  const classes = useStyles()

  return (
    <Fragment>
    <Box className={classes.root}>
      <Box>
        <Header />
      </Box>
      <Divider variant="middle"/>
      <Box mt={3}>
        <Carousel className={classes.carousel}/>
      </Box>
    </Box>
    </Fragment>
  )
}

export default App