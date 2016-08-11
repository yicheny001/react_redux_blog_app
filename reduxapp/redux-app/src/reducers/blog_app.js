const blogApp = (state={posts:[]}, action) => {
  switch(action.type){
    case 'ADD_POST':
    return Object.assign({},state,{posts:[...state.posts, {
      title: action.title
    }]} )
    default:
    return state
  }
}

export default blogApp
