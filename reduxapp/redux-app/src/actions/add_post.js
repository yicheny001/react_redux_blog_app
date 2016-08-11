const addPost = ({title, authorName})=>{
  return {
    type: 'ADD_POST',
    title: title,
    authorName: authorName,
  }
}

export default addPost
