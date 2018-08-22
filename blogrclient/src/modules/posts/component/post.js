import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
  container: {
    padding: 20
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

const Post = (props) => {
  const { classes, title, content } = props
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='headline' component='h2'>
            { title }
          </Typography>
          <Typography component='p'>
            { content }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  content: PropTypes.string
}

export default withStyles(styles)(Post)
