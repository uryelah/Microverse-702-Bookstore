import { combineReducers } from 'redux';

import books from './books';
import filteredBooks from './filter';

const rootReducer = combineReducers({
  books,
  filteredBooks,
});

export default rootReducer;
