import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = props => (
  <form>
    <input type="text" />
    <select name="category">
      {
          categories.map((category, i) => (<option key={i}>{category}</option>))
        }
    </select>
    <button type="submit">Submit</button>
  </form>
);

export default BooksForm;
