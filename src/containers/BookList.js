import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, tempFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions/index'

const BookList = ({ filteredBooks, books, removeBook, tempFilter }) => (
  <React.Fragment> 
    <CategoryFilter onChange={tempFilter} />
    <table>
      <theader>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>CategoryAge</th>
        </tr>
      </theader>
      <tbody>
        {
          books.map(book => (
            book.show ? <Book key={book.id} book={book} onClick={removeBook} /> : ''
          ))
        }
      </tbody>
    </table>
  </React.Fragment> 
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filteredBooks: state.filteredBooks });

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  tempFilter: filter => {
    dispatch(tempFilter(filter))
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter))
  }
});

const BookListProvider = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListProvider;
