import React, {Component} from 'react';
import { connect } from 'react-redux'


class AuthorSelect extends Component {
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
  return {authors: state.authors}
}

const SmartAuthorSelect = connect(mapStateToProps)(AuthorSelect)

export default SmartAuthorSelect
