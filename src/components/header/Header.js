import React, { Fragment } from 'react'
import { Box, Typography } from '@material-ui/core'
import NavigationButton from '../../common/components/NavigationButton'

const Header = () => {
  return (
    <Box display="flex" flexDirection="row">
      <Box flexGrow={1}>
        <Box m={2}>
          <Typography variant="h3" component="div">
            hakoratorio
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box m={2}>
          <NavigationButton color="#4D4D4D" lineHeight="56px">Stamp</NavigationButton>
        </Box>
        <Box m={2}>
          <NavigationButton color="#4D4D4D" lineHeight="56px">PianoRoll</NavigationButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Header