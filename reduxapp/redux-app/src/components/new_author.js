import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect} from 'react-redux'
import addAuthor from '../actions/add_author.js'

class NewAuthor extends Component{

  submitHandler(event){
    event.preventDefault()
    this.props.addAuthor(event.target.firstChild.value)
    event.target.firstChild.value = ""
    //grabbing the input value in form
  }

  render(){
    return(
      <form onSubmit={this.submitHandler.bind(this)}>
        <input type='text' placeholder='author name' ></input>
        <button type='submit'>SUBMIT</button>
      </form>
    )
  }
}

// below is used on smart
// because you want to use this dot props dot addPost
// connect connects to your store
// store has dispatch
// bindActionCreators converts actionCreators into a dispatch format
// mapDispatchToProps maps dispatch to props
// connect makes either state or dispatch available to the (smart) component

function mapDispatchToProps(dispatch){
  return bindActionCreators({addAuthor: addAuthor}, dispatch)
}

const SmartNewAuthor = connect(null, mapDispatchToProps)(NewAuthor)
export default SmartNewAuthor
