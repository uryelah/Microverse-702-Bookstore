import bookActions from '../actions/actionTypes';

const { CHANGE_FILTER } = bookActions;

const filter = (state = 'All', { type, filter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return filter;
    default:
      return state;
  }
};

export default filter;
