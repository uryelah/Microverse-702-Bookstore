import React from 'react';
import BookListProvider from './BookList';
import BooksFormProvider from '../components/BooksForm';

const App = () => (
  <div className="app">
    <nav className="app-nav" />
    <BookListProvider />
    <hr className="app-line" />
    <BooksFormProvider />
  </div>
);

export default App;
