import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Posts from './modules/posts/container/posts'
import Post from './modules/posts/container/post'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class App extends Component {
  render () {
    const { classes } = this.props
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position='static'>
            <Toolbar>
              <Typography variant='title' color='inherit' className={classes.flex}>
            Blogs
              </Typography>
            </Toolbar>
          </AppBar>
          <Route exact path='/' component={Posts} />
          <Route path='/post/:id' component={Post} />
        </div>
      </BrowserRouter>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
