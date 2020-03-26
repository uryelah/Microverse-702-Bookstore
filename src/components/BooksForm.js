import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import categories from '../helpers/categories';
import { createBook } from '../actions/index';


class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(e) {
    const { title, category } = this.state;
    const { value, nodeName } = e.target;

    let newTitle = title;
    let newCategory = category;
    switch (nodeName) {
      case 'INPUT':
        newTitle = value;
        break;
      case 'SELECT':
        newCategory = value;
        break;
      default:
        newTitle = title;
    }

    this.setState({ category: newCategory, title: newTitle });
  }

  resetForm() {
    this.setState({ title: '', category: 'Action' });
  }

  handleSubmit(e) {
    const { createBook } = this.props;
    const { title, category } = this.state;

    createBook({
      id: uuidv4(),
      title,
      category,
      show: true,
    });
    this.resetForm();
    e.preventDefault();
  }

  render() {
    const { title, category } = this.state;

    return (
      <form className="booksform" onSubmit={this.handleSubmit}>
        <h2 className="booksform-title">ADD NEW BOOK</h2>
        <input placeholder="Book Title" className="booksform-input" type="text" value={title} onChange={this.handleChange} required />
        <select className="booksform-input booksform-select" name="category" value={category} onChange={this.handleChange}>
          {
            categories.map((category, i) => (
              <option key={category} default={i === 0 && true}>{category}</option>))
          }
        </select>
        <button className="booksform-btn" type="submit"><p className="booksform-btn-text">Add Book</p></button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
