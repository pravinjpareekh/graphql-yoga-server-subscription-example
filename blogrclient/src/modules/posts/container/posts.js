import React, { Component } from 'react'
import PostsComponent from 'modules/posts/component/posts'
import { withApollo, Query } from 'react-apollo'
import PropTypes from 'prop-types'

import GET_ALL_POSTS from 'modules/posts/graphql/getAllPosts.graphql'
import POSTS_SUBSCRIPTION from 'modules/posts/graphql/postsSubscription.graphql'

class Posts extends Component {
  componentDidMount () {
    const { client } = this.props
    this.subscriptionHandler = client.subscribe({
      query: POSTS_SUBSCRIPTION
    }).subscribe(
      data => this.onSubscribe(data)
    )
  }

  componentWillUnmount () {
    this.subscriptionHandler.unsubscribe()
  }

  onSubscribe = (data) => {
    const { client } = this.props
    client.query({
      query: GET_ALL_POSTS,
      fetchPolicy: 'network-only'
    })
  }

  render () {
    return (<Query query={GET_ALL_POSTS}>
      {({ loading, error, data: {posts} }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        return (
          <PostsComponent data={posts} />
        )
      }}
    </Query>)
  }
}

Posts.propTypes = {
  client: PropTypes.object
}

export default withApollo(Posts)
