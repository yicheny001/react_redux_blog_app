import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers, bindActionCreators } from 'redux'
import { connect, Provider} from 'react-redux'
import AuthorSection from './components/author_section.js'
import PostSection from './components/post_section.js'

import blogApp from './reducers/blog_app.js'
import './index.css';

const store = createStore(blogApp)

class App extends Component{
  render(){
    return(
      <div id='app'>
        <AuthorSection />
        <PostSection />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
