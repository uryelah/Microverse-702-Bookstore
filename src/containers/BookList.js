import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const listStyle = {
  position: 'relative',
  height: '90%',
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const BookList = ({
  filter, changeFilter, books, removeBook,
}) => (
  <div style={listStyle}>
    <CategoryFilter onChange={changeFilter} />
    <table>
      <theader>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </theader>
      <tbody>
        <p>{filter}</p>
        {
          books.filter(b => b.category === filter || filter === 'All').map(book => (
            <Book key={book.id} book={book} onClick={removeBook} />
          ))
        }
      </tbody>
    </table>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

const BookListProvider = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListProvider;
