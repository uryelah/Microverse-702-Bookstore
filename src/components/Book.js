import React from 'react';

const Book = ({ book }) => (
  <tr key={book.id}>
    <td>{book.id}</td>
    <td><strong>{book.title}</strong></td>
    <td>{book.category}</td>
  </tr>
);

export default Book;
