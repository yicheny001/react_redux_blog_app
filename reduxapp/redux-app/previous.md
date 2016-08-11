import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


  function createStore(){
    let state;
    const getState = () => {
      return state
    }
    const dispatch = (action) => {
      state = reducer(state, action)
      render()
    }
    state = reducer(state, {})
    return { getState, dispatch}
  }

// REDUCER
function reducer(state = {authors: [], todos: [], authorCounter:0}, action = {type: ''}){
  switch(action.type){
    case 'ADD_TASK':
      let newTask = {authorId:state.authorCounter}
      return  {
        todos: state.todos.concat(action.payload)
      }
    case 'ADD_AUTHOR':
      let newAuthor={id: state.authorCounter, name: action.payload.name}
      return {
        authors: state.authors.concat([newAuthor]),
        todos: state.todos,
        authorCounter: state.authorCounter+=1
      }
    default:
      return state
  }
}

const store = createStore(reducer)

const Task = ({authorId: authorId, id:id, text:taskText})=>{
  return <p>{taskText}</p>
}

function handleOnClick(){
  var authorName = document.getElementById("newAuthor").value
  store.dispatch({type: 'ADD_AUTHOR', payload: {name: authorName}})
}

function handleSaveTask(){
  var taskText = document.getElementById("newTask").value
  store.dispatch({type: 'ADD_TASK', payload: {text: taskText}})
  new Task
}


function handleNewTask(id){
  let newTask = "<input type='text'>new task here</input><button onClick={handleSaveTask} type='submit'>ADD</button>"
  return(
    document.getElementById(id).innerHTML = newTask
  )

}



class App extends Component {
  render() {
    var authors = this.props.data.authors.map((author) => {
            return (
              <div>
                <input type='checkbox' onClick={()=>{handleNewTask(author.id)}}></input>
                  {author.name}
                  <div id={author.id} className='tasks'>
                  </div>
              </div>
            )
          })
    return (
      <div>
          <input id='newAuthor' type="text" placeholder="enter an author name..."/>
            <button onClick={handleOnClick}> add your name!</button>
          <ul>
            {authors}
          </ul>

      </div>
    );
  }
}


function render(){
  ReactDOM.render(
  <App data={store.getState()}/>,
  document.getElementById('root')
 );
}

render()
