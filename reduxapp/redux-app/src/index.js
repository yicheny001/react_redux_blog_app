import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers, bindActionCreators } from 'redux'
import { connect, Provider} from 'react-redux'
import AddPosts from './components/add_posts.js'
import blogApp from './reducers/blog_app.js'
import './index.css';

const store = createStore(blogApp)

class App extends Component{
  render(){
    return(
      <div id='app'>
        <AddPosts />
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