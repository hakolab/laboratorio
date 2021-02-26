import React, { Fragment } from 'react'
import { Box, Typography } from '@material-ui/core'
import NavigationButton from '../../common/components/NavigationButton'
import LogoImage from '../../static/img/Logo.png'

const Header = () => {

  const redirectToStamp = () => {
    window.location.href = "https://stamp.hakodatetaro.com/"
  }

  const redirectToPianoRoll = () => {
    window.location.href = "https://pianoroll.hakodatetaro.com/"
  }


  return (
    <Box display="flex" flexDirection="row">
      <Box flexGrow={1}>
        <Box m={1}>
          <img
              src={LogoImage}
              alt="stamp"
              height="30"
              />
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box m={1}>
          <NavigationButton color="#4D4D4D" lineHeight="30px" onClick={redirectToStamp}>Stamp</NavigationButton>
        </Box>
        <Box m={1}>
          <NavigationButton color="#4D4D4D" lineHeight="30px" onClick={redirectToPianoRoll}>PianoRoll</NavigationButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Header