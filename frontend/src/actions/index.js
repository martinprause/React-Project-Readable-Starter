import { getServerCategories,
         getServerPosts,
         getServerPostsByCategory,
         getServerComments,
         addServerComment,
         getServerComment,
         editServerComment,
         deleteServerComment,
         voteServerComment,
         addServerPost,
         getServerPost,
         editServerPost,
         deleteServerPost,
         voteServerPost

 } from '../utils/serverapi'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'
export const GET_COMMENTS = 'GET_COMMENTS'
export const SORT_POSTS = 'SORT_POSTS'
export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const GET_COMMENT = 'GET_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'



export const getCategoriesFromServer = () => dispatch => (
   getServerCategories().then(categories => dispatch(getCategories(categories))
  )
)

function getCategories (categories) {
  return {
  	type: GET_CATEGORIES, 
  	categories
  }
}

export const getPostsFromServer = () => dispatch => (
   getServerPosts().then(posts => dispatch(getPosts(posts))
  )
)

function getPosts (posts) {
  return {
  	type: GET_POSTS, 
  	posts
  }
}

export const getPostsByCategoryFromServer = (category) => dispatch => (
   getServerPostsByCategory(category).then(posts => dispatch(getPostsByCategory(category,posts))
  )
)

function getPostsByCategory (category,posts) {
  return {
  	type: GET_POSTS_BY_CATEGORY,
  	category, 
  	posts
  }
}


export const getCommentsFromServer = (postId) => dispatch => (
   getServerComments(postId).then(comments => dispatch(getComments(postId,comments))
  )
)

function getComments (postId,comments) {
  return {
  	type: GET_COMMENTS,
  	postId, 
  	comments
  }
}

export function sortPosts (sortBy,sortOrder) {
  return {type: SORT_POSTS, sortBy, sortOrder}
}


export const getPostFromServer = (postId) => dispatch => (
   getServerPost(postId).then(post => dispatch(getPost(post))
  )
)


function getPost (post) {
  return {type: GET_POST, post}
}

export const addPostOnServer = ({post}) => dispatch => (
   addServerPost(post).then(post => dispatch(addPost(post))
  )
)

function addPost (post) {
  return {type: ADD_POST, post}
}

export const editPostOnServer = (postId,post) => dispatch => (
   editServerPost(postId,post).then(post => dispatch(editPost(post))
  )
)

function editPost (post) {
  return {type: EDIT_POST, post}
}

export const deletePostOnServer = (postId) => dispatch => (
   deleteServerPost(postId).then(post => dispatch(deletePost(post))
  )
)

function deletePost (post) {
  return {type: DELETE_POST, post}
}

export const votePostOnServer = (postId,option) => dispatch => (
   voteServerPost(postId,option).then(post => dispatch(votePost(post))
  )
)

function votePost (post) {
  return {type: VOTE_POST, post}
}


//////////////


export const getCommentFromServer = (commentId) => dispatch => (
   getServerComment(commentId).then(comment => dispatch(getComment(comment))
  )
)


function getComment (comment) {
  return {type: GET_COMMENT, comment}
}

export const addCommentOnServer = ({comment}) => dispatch => (
   addServerComment(comment).then(comment => dispatch(addComment(comment))
  )
)

function addComment (comment) {
  return {type: ADD_COMMENT, comment}
}

export const editCommentOnServer = (commentId,comment) => dispatch => (
   editServerComment(commentId,comment).then(comment => dispatch(editComment(comment))
  )
)

function editComment (comment) {
  return {type: EDIT_COMMENT, comment}
}

export const deleteCommentOnServer = (commentId) => dispatch => (
   deleteServerComment(commentId).then(comment => dispatch(deleteComment(comment))
  )
)

function deleteComment (comment) {
  return {type: DELETE_COMMENT, comment}
}

export const voteCommentOnServer = (commentId,option) => dispatch => (
   voteServerComment(commentId,option).then(comment => dispatch(voteComment(comment))
  )
)

function voteComment (comment) {
  return {type: VOTE_COMMENT, comment}
}

