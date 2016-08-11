import React, {Component} from 'react';
import SmartNewPost from './new_post.js'
import SmartShowPosts from './show_posts.js'

const AddPosts = class extends Component {
  render(){
    return(
      <div>
        <SmartNewPost/ >
        <SmartShowPosts/ >
      </div>
    )
  }
}

export default AddPosts
