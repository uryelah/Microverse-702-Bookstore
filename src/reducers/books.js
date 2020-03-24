import bookActions from '../actions/actionTypes';

const { CREATE_BOOK, REMOVE_BOOK } = bookActions;

const initialState = [];

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

for (let i = 0; i < 20; i += 1) {
  initialState.push({ id: Math.random(), title: `Book Title - ${i}`, category: categories[Math.floor(Math.random() * categories.length)] });
}


const bookReducer = (state = initialState, action) => {
  const { type, book } = action;
  switch (type) {
    case CREATE_BOOK:
      return [...state, book];
    case REMOVE_BOOK:
      return state.filter(b => b.id !== book.id);
    default:
      return state;
  }
};

export default bookReducer;
