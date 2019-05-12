import * as statusDuck from './ducks/statusDuck'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const appBarHeight = 92
const styles = (theme) => {
  return {
    root: {
      height: '100vh',
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    appBar: {
      height: appBarHeight,
      padding: theme.spacing.unit * 2,
    },
    content: {
      marginTop: appBarHeight,
      flexGrow: 1,
    },
    switchButton: {
      padding: theme.spacing.unit,
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props.getStatus()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Grid container justify='center'>
            <Grid item>
              <Typography variant='h2' color='inherit' align='center'>
                Did I Bike In Today?
              </Typography>
            </Grid>
            <Grid item className={classes.switchButton}>
              <Button color='inherit' variant='outlined' onClick={() => { this.props.updateStatus() }}>
                Switch Status
              </Button>
            </Grid>
          </Grid>
        </AppBar>
        <Grid
          container
          alignItems='center'
          justify='center'
          direction='row'
          className={classes.content}>
          <Grid item>
            <Typography variant='h3' color='inherit' align='center'>
              { this.props.status ? 'Yes' : 'No' }
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(
  (state, props) => {
    return {
      status: state.status.status
    }
  },
  (dispatch, props) => {
    return {
      getStatus: () => dispatch(statusDuck.getStatus()),
      updateStatus: () => dispatch(statusDuck.updateStatus()),
    }
  }
)(withStyles(styles)(App))
