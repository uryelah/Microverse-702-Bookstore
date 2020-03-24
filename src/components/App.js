import React from 'react';
import BookList from './BookList';
import BooksForm from './BooksForm';

class App extends React.Component {
  cosntructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BookList />
        <BooksForm />
      </div>
    )
  }

}