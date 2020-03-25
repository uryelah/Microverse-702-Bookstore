import React from 'react';
import categories from '../helpers/categories';

const CategoryFilter = () => (
  <select>
    {
      categories.map((category, i) => (
        <option key={category} default={i === 0 && true}>{category}</option>))
    }
  </select>
)

export default CategoryFilter;