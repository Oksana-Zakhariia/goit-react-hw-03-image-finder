import PropTypes from 'prop-types';
import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import {
  SearchBarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = { searchingName: '' };
  static propTypes = { onSubmit: PropTypes.func.isRequired };
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
      <SearchBarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <span className="button-label">
              <AiOutlineSearch size="48px"></AiOutlineSearch>
            </span>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchingName}
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </SearchBarStyled>
    );
  }
}
