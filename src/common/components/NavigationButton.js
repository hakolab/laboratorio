import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    color: props => props.color,//"#4D4D4D",
    fontWeight: "bold",
    border: "none",
    borderRadius: "0px",
    padding: "0px",
    lineHeight: props => props.lineHeight,//"40px",
    [theme.breakpoints.up('sm')]: {
        width: "150px",
        fontSize: "0.9em"
    },
    [theme.breakpoints.down('xs')]: {
        width: "60px",
        fontSize: "0.7em"
    },
  }
}))

const NavigationButton = ({children, color, lineHeight, disabled}) => {
    const classes = useStyles({color, lineHeight})
    return <Button className={classes.root} disabled={disabled}>{children}</Button>
}

export default NavigationButton