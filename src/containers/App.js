import React from 'react';
import BookListProvider from './BookList';
import BooksForm from '../components/BooksForm';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BookListProvider />
        <BooksForm />
      </div>
    );
  }
}

export default App;
