import bookActions from '../actions/actionTypes';

const { CREATE_BOOK, REMOVE_BOOK, TEMP_FILTER } = bookActions;

const books = (state = [], { type, book, filter }) => {
  switch (type) {
    case CREATE_BOOK:
      return [...state, book];
    case REMOVE_BOOK:
      return state.filter(b => b.id !== book.id);
    case TEMP_FILTER:
      return state.map(b => {
        if (b.category === filter || filter === 'All') {
          b.show = true;
        } else {
          b.show = false;
        }
        return b;
      });
    default:
      return state;
  }
};

export default books;
