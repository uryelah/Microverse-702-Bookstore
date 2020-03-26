import React from 'react';
import BookListProvider from './BookList';
import BooksFormProvider from '../components/BooksForm';

const App = () => (
  <div className="app">
    <nav className="app-nav">
      <h1>
        BookList
        <i className="fas fa-book" />
      </h1>
    </nav>
    <BookListProvider />
    <hr className="app-line" />
    <BooksFormProvider />
  </div>
);

export default App;
