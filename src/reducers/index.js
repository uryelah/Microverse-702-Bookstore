import { combineReducers } from 'redux';

import { createBook, removeBook } from '../actions/index';

const rootReducer = combineReducers({
  createBook,
  removeBook,
})

export default rootReducer;