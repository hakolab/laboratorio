import React from 'react'
import './static/css/App.css'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  }
})

const App = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h3" component="div">
        hakolab
      </Typography>
    </Box>
  )
}

export default App