import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import categories from '../helpers/categories';
import { createBook } from '../actions/index';

const fTitleStyle = {
  width: 174,
  height: 24,
  fontFamily: 'Montserrat',
  fontSize: 20,
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: -0.18,
  color: '#888888',
};

const fInputStyle = {
  width: 664,
  height: 45,
  borderRadius: 4,
  border: 'solid 1px #e8e8e8',
  backgroundColor: '#ffffff',
}

const btnStyle = {
  width: 184,
  height: 45,
  borderRadius: 3,
  backgroundColor: '#0290ff',
}

const btnTextStyle = {
  width: 143,
  height: 18,
  fontFamily: 'RobotoSlab',
  fontSize: 13,
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 0.5,
  textAlign: 'center', 
  color: '#ffffff',
}

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
      <form onSubmit={this.handleSubmit}>
        <h2 style={fTitleStyle}>ADD NEW BOOK</h2>
        <input style={fInputStyle} type="text" value={title} onChange={this.handleChange} />
        <select style={fInputStyle} name="category" value={category} onChange={this.handleChange}>
          {
            categories.map((category, i) => (
              <option key={category} default={i === 0 && true}>{category}</option>))
          }
        </select>
        <button style={btnStyle} type="submit"><p style={btnTextStyle}>Submit</p></button>
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
