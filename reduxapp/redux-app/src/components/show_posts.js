import React, {Component} from 'react';
import { connect } from 'react-redux'
import PostLis from './post_li.js'

const ShowPosts = class extends Component {
  render(){
    return(
      <ul>
      {this.props.posts.map((post)=>{
        return <PostLis key={post.title} title={post.title}/>
      })}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

const SmartShowPosts = connect(mapStateToProps)(ShowPosts)
export default SmartShowPosts
