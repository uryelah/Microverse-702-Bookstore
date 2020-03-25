import bookActions from '../actions/actionTypes';

const { CHANGE_FILTER } = bookActions;

const filteredBooks = (state = [], { type, filter }) => {
  console.log(type);
  switch (type) {
    case CHANGE_FILTER:
      return state.filter(book => book.category === filter);
    default:
      return state;
  }
};

export default filteredBooks;
