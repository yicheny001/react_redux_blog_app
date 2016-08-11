import React, {Component} from 'react';
import { connect } from 'react-redux'
import AuthorLis from './author_li.js'

class AuthorSelect extends Component {
  render(){
    return(
      <select>
      {this.props.authors.map((author)=>{
        return <option value={author.name}>{author.name}</option>
      })}
      </select>
    )
  }
}


function mapStateToProps(state){
  return {authors: state.authors}
}

const SmartAuthorSelect = connect(mapStateToProps)(AuthorSelect)

export default SmartAuthorSelect
