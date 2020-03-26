import React from 'react';
import PropTypes from 'prop-types';
import categories from '../helpers/categories';

const CategoryFilter = ({ onChange }) => (
  <div className=" book-filter">
    <h3 htmlFor="filter">
      Filter:
    </h3>
    <select className="booksform-input" id="filter" onChange={e => onChange(e.target.value)}>
      {
        ['All', ...categories].map((category, i) => (
          <option key={category} default={i === 0 && true} value={category}>{category}</option>))
      }
    </select>
  </div>
);

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
