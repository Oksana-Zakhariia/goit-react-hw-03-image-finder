import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = { searchingName: '' };
  handleNameChange = event => {
    this.setState({ searchingName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchingName.trim() === '') {
      toast.error('Write search parameters', { theme: 'colored' });
      return;
    }
    this.props.onSubmit(this.state.searchingName);
    this.setState({ searchingName: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">
              <AiOutlineSearch></AiOutlineSearch>
            </span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchingName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
