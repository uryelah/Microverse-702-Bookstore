import React from 'react';
import Book from './Book';

const BookList = ({ books }) => (
  <table>
    <th>ID</th>
    <th>Title</th>
    <th>Category</th>
    {books.map(book => (
      <Book book={book} />
    ))}
  </table>
);

export default BookList;
