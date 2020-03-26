import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onClick }) => (
  <article className="book" key={book.id}>
    <div>
      <p className="book-category">{book.category}</p>
      <h2>{book.title}</h2>
      <p className="book-id">{book.id}</p>
    </div>
    <div><button className="btn" type="button" onClick={() => onClick(book)}>Remove</button></div>
  </article>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
