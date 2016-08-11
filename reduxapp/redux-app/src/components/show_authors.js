import React, {Component} from 'react';
import { connect } from 'react-redux'
import AuthorLis from './author_li.js'

const ShowAuthors = class extends Component {
  render(){
    return(
      <ul>
      {this.props.authors.map((author)=>{
        return <AuthorLis key={author.name} name={author.name}/>
      })}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    authors: state.authors
  }
}

const SmartShowAuthors = connect(mapStateToProps)(ShowAuthors)
export default SmartShowAuthors
