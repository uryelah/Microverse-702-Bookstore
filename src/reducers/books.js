const bookReducer = (state, action) => {
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
