import React from 'react';

const BookList = ({ books }) => (

  <table>
    <th>ID</th>
    <th>Title</th>
    <th>Category</th>
    {books.map(i => (
      <tr>
        <td>{i.id}</td>
        <td>{i.title}</td>
        <td>{i.category}</td>
      </tr>
    ))}
  </table>
);
