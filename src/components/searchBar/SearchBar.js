import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

export default class Searchbar extends Component {
  static defaultProps = {
    imageName: '',
  };

  static propTypes = {
    imageName: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    imageName: '',
  };

  handleChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      alert('Для поиска нужно что то ввести');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.buttons}>
            <span className={styles.label}>Search</span>
          </button>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}