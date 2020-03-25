import React from 'react';
import PropTypes from 'prop-types';
import categories from '../helpers/categories';

const CategoryFilter = ({ onChange }) => (
  <select onChange={e => onChange(e.target.value)}>
    {
      ['All', ...categories].map((category, i) => (
        <option key={category} default={i === 0 && true} value={category}>{category}</option>))
    }
  </select>
);

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
