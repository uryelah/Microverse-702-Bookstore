import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ books }) => (
  <table>
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>CategoryAge</th>
    </tr>
    {
      books.bookReducer.map((book, i) => (
        <Book key={i} book={book} />
      ))
    }
  </table>
);

const mapStateToProps = state => ({ books: state });

const BookListProvider = connect(mapStateToProps)(BookList);

export default BookListProvider;
