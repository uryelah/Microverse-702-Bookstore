import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';


const BookList = ({
  filter, changeFilter, books, removeBook,
}) => (
  <div className="booklist">
    <CategoryFilter onChange={changeFilter} />
    <main>
      <section>
        {
          books.filter(b => b.category === filter || filter === 'All').map(book => (
            <Book key={book.id} book={book} onClick={removeBook} />
          ))
        }
      </section>
    </main>
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
