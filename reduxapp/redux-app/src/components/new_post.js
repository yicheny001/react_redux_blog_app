import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect} from 'react-redux'
import addPost from '../actions/add_post.js'


class NewPost extends Component{

  submitHandler(event){
    event.preventDefault()
    this.props.addPost(event.target.firstChild.value)
    event.target.firstChild.value = ""
    //grabbing the input value in form
  }

  render(){
    return(
      <form onSubmit={this.submitHandler.bind(this)}>
        <input type='text' placeholder='blog title' ></input>
        <button type='submit'>SUBMIT</button>
      </form>
    )
  }
}

// below is used on smart
// because you want to use this props addPost
// connect connects to your store
// store has dispatch
// bindActionCreators converts actionCreators into a dispatch format
// mapDispatchToProps maps dispatch to props
// connect makes either state or dispatch available to the (smart) component

function mapDispatchToProps(dispatch){
  return bindActionCreators({addPost: addPost}, dispatch)
}

const SmartNewPost = connect(null, mapDispatchToProps)(NewPost)
export default SmartNewPost
