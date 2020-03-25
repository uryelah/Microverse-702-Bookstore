import React, {Component} from 'react';
import categories from './categories';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(e) {
    const {title, category} = this.state;
    const {value, nodeName} = e.target;

    let newTitle = title;
    let newCategory = category;
    switch (nodeName) {
      case 'INPUT':
        newTitle = value;
        break
      case 'SELECT':
        newCategory = value;
        break;
      default:
        newTitle = title;
    }

    this.setState({category: newCategory, title: newTitle});
  }

  resetForm() {
    this.setState({title: '', category: 'Action'});
  }

  handleSubmit(e) {
    const { createBook } = this.props;
    const {title, category} = this.state;

    createBook({
      id: Math.random(),
      title: title,
      category: category,
    });
    this.resetForm();
    e.preventDefault();
  }

  render() {
    const { title, category } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={title} onChange={this.handleChange} />
      <select name="category" value={category} onChange={this.handleChange}>
        {
            categories.map((category, i) => {
              return (<option key={category} default={i === 0 && true}>{category}</option>)
            })
          }
      </select>
      <button type="submit">Submit</button>
    </form>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createBook: (book) => {
      dispatch(createBook(book));
    }
  }
}

export default connect(null, mapDispatchToProps) (BooksForm)
