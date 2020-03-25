import React from 'react';
import PropTypes from 'prop-types';

const bookStyle = {
  width: 1200,
  height: 170,
  borderRadius: 4,
  border: 'solid 1px #e8e8e8',
  backgroundColor: '#ffffff',
}

const Book = ({ book, onClick }) => (
  <tr style={bookStyle} key={book.id}>
    <td>{book.id}</td>
    <td><strong>{book.title}</strong></td>
    <td>{book.category}</td>
    <td><button type="button" onClick={() => onClick(book)}>X</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
