import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

const Posts = (props) => {
  const { classes, data } = props
  return (
    <div className={classes.root}>
      <List component='nav'>
        {
          data.map(post => <Link to={`/post/${post.id}`} key={post.id}>
            <ListItem button>
              <ListItemText primary={post.title} />
            </ListItem>
          </Link>)
        }
      </List>
    </div>
  )
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array
}

export default withStyles(styles)(Posts)
