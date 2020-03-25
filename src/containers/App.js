import React from 'react';
import BookListProvider from './BookList';
import BooksFormProvider from '../components/BooksForm';
import CategoryFilterContainer from './CategoryFilterContainer';

const App = () => (
  <div>
    <CategoryFilterContainer />
    <BookListProvider />
    <BooksFormProvider />
  </div>
);

export default App;
