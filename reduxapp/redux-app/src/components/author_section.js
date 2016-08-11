import React, {Component} from 'react';
import SmartNewAuthor from './new_author.js'
import SmartShowAuthors from './show_authors.js'

class  AuthorSection extends Component {
  render(){
    return(
      <div>
      Add new author here:
        <SmartNewAuthor/ >
        These are the existing authors:
        <SmartShowAuthors/ >
      </div>
    )
  }
}

export default AuthorSection
