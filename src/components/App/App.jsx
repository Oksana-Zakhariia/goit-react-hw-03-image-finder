import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from 'components/services/fetch';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
    error: null,
    loading: false,
    modalURL: '',
    showLoadButton: false,
  };
  handleFormSubmit = name => {
    this.setState({
      name,
      results: [],
      page: 1,
    });
  };
  handleModalUrl = largeImageUrl => {
    this.setState({ modalURL: largeImageUrl });
  };
  isLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  async componentDidUpdate(_, prevState) {
    const { name, page, images } = this.state;
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true, error: null });
        const response = await fetchImages({ page, name });
        const pictures = response.hits;
        this.setState(prevState => ({
          images: [...prevState.images, ...pictures],
        }));
        const totalPages = response.total / 12;
        if (page > totalPages) {
          this.setState({ showLoadButton: true });
        }
        if (images.length === 0) {
          this.setState({ showLoadButton: false });
        }
        if (page <= totalPages) {
          this.setState({ showLoadButton: true });
        }
      } catch (error) {
        this.setState({ error: 'There is no picture with such tags' });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  render() {
    const { error, loading, images, showLoadButton, modalURL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        {error && <h2>{error}</h2>}
        {loading && <Loader></Loader>}
        {modalURL.length > 0 && <div>MODALLLL</div>}
        <ToastContainer autoClose={3000} />
        <ImageGallery
          items={images}
          onClick={this.handleModalUrl}
        ></ImageGallery>
        {showLoadButton && (
          <button onClick={this.isLoadMore}> Load more...</button>
        )}
      </div>
    );
  }
}
