import React, {Component} from 'react';
import SmartNewAuthor from './new_author.js'
import SmartShowAuthors from './show_authors.js'

class  AddAuthors extends Component {
  render(){
    return(
      <div>
        <SmartNewAuthor/ >
        <SmartShowAuthors/ >
      </div>
    )
  }
}

export default AddAuthors
