import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'

import PostComponent from 'modules/posts/component/post'

import GET_ALL_POSTS from 'modules/posts/graphql/getAllPosts.graphql'
import POSTS_SUBSCRIPTION from 'modules/posts/graphql/postsSubscription.graphql'

class Post extends Component {
  state = {
    title: '',
    content: ''
  }

  async componentDidMount () {
    const { client, match } = this.props
    const cache = await client.query({
      query: GET_ALL_POSTS
    })
    const id = match.params.id
    const posts = cache.data.posts
    const foundIndex = posts.findIndex(x => x.id === id)
    if (foundIndex >= 0) {
      this.setState({
        title: posts[foundIndex].title,
        content: posts[foundIndex].content
      })
    }

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
    const { title, content } = this.state
    return <PostComponent title={title} content={content} />
  }
}

Post.propTypes = {
  match: PropTypes.object,
  client: PropTypes.object
}

export default withApollo(Post)
