import React from 'react';
import categories from '../helpers/categories';

const CategoryFilter = ({onChange}) => (
  <select onChange={(e) => onChange(e.target.value)}>
    {
      categories.map((category, i) => (
        <option key={category} default={i === 0 && true} value={category}>{category}</option>))
    }
  </select>
)

export default CategoryFilter;