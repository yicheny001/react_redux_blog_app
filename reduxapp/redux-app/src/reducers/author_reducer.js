const authorReducer = (state={authors:[]}, action) => {
  switch(action.type){
    case 'ADD_AUTHOR':
    return Object.assign({},state,{authors:[...state.authors, {
      name: action.name
    }]} )
    default:
    return state
  }
}

export default authorReducer
