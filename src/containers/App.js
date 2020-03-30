import React from 'react';
import BookListProvider from './BookList';
import BooksFormProvider from '../components/BooksForm';
import $ from 'jquery';

const data = {
  book: {
    title: 'meh',
    author: 'darwea',
    category: 'action',
  }
}

const requestPosts = async() => {
  const url = 'http://localhost:5000/api/v1/books';
  let fuck = await fetch(url).then(res => {
    return res;
  });

  let result = await fuck.json();

  console.log(result);

  let make = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const book = await make.json();
  console.log(book)
  /*
  $.ajax({
    type: 'POST',
    url: '/api/v1/books',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({ book: { title: "Yehuda", author: "Katz", category: 'action' } }),
    success: function(json) { 
      console.log(json)
    }
  });
  */
};

const App = () => {
  console.log(requestPosts());

  return(
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
)};

export default App;
