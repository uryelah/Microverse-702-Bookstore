import React from 'react';

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

const BooksForm = ({ categories }) => {
  return (
    <form>
      <input type='text'></input>
      <select name='category'>
        {
          categories.forEach((category, i) => {
            <option key={i}>{category}</option>
          });
        }
      </select>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default BooksForm;