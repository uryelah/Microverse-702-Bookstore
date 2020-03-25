import React from 'react';
import BookListProvider from './BookList';
import BooksFormProvider from '../components/BooksForm';

const appStyle = {
  width: '1400px',
  height: '100%',
  borderRadius: '4px',
  boxShadow: '0 0 60px 0 rgba(0, 0, 0, 0.05)', 
  backgroundColor: '#fafafa',
  margin: '0 auto',
}

const navStyle = {
  width: 1400,
  height: 95,
  backgroundColor: '#ffffff',
}

const lineStyle = {
  width: 1200,
  height: 2,
  border: 'solid 1px #e8e8e8',
}

const App = () => (
  <div style={appStyle}>
    <nav style={navStyle}></nav>
    <BookListProvider />
    <hr style={lineStyle}/>
    <BooksFormProvider />
  </div>
);

export default App;
