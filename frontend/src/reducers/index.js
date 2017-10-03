import {orderBy} from 'lodash'
import { 
	GET_CATEGORIES, 
	GET_POSTS,
	GET_POSTS_BY_CATEGORY,
	GET_COMMENTS,
  SORT_POSTS,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  GET_COMMENT ,
  ADD_COMMENT ,
  EDIT_COMMENT ,
  DELETE_COMMENT,
  VOTE_COMMENT,
 } from '../actions'

import { combineReducers } from 'redux'



const categories = (state = [] , action) => {
  switch(action.type) {
    case GET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

const posts = (state = [] , action) => {
  switch(action.type) {
    case GET_POSTS:
     return action.posts
    case GET_POSTS_BY_CATEGORY:
     return action.posts
    case SORT_POSTS:
      return orderBy([...state], [action.sortBy], [action.sortOrder])
    default:
      return state
  }
}

const post = (state = {}, action) => {
  switch (action.type) {
    case GET_POST:
    case ADD_POST:
    case EDIT_POST:
    case DELETE_POST:
    case VOTE_POST:
      return action.post
    default:
      return state
  }
}


const comment = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENT:
    case ADD_COMMENT:
    case EDIT_COMMENT:
    case DELETE_COMMENT:
    case VOTE_COMMENT:
      return action.comment
    default:
      return state
  }
}

const comments = (state = [] , action) => {
  switch(action.type) {
    case GET_COMMENTS:
     return action.comments
    default:
      return state
  }
}

export default combineReducers({
  categories, posts, comments, post, comment
})