import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from 'components/services/fetch';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
    error: null,
    loading: false,
    modalURL: '',
    showLoadButton: false,
    // showModal: false,
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
  onCloseModal = () => {
    this.setState({ modalURL: '' });
  };
  isLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  // toggleModal = largeImageUrl => {
  //   this.setState(state => ({ showModal: !state.showModal }));
  //   this.setState({ modalURL: largeImageUrl });
  // };
  async componentDidUpdate(_, prevState) {
    const { name, page } = this.state;
    if (prevState.name !== name || prevState.page !== page)
      try {
        this.setState({
          loading: true,
          error: null,
          page,
        });
        const response = await fetchImages({ page, name });
        const pictures = response.hits;
        this.setState(prevState => ({
          images: [...prevState.images, ...pictures],
        }));
        if (prevState.name !== name) {
          this.setState({ images: [...pictures] });
        }
        const totalPages = Math.ceil(response.total / 12);

        if (page > totalPages) {
          this.setState({ showLoadButton: false });
        }
        if (totalPages === 0) {
          toast.error('There is no images with such params', {
            theme: 'colored',
          });
          this.setState({
            showLoadButton: false,
          });
        }
        if (page <= totalPages) {
          this.setState({ showLoadButton: true });
        }
      } catch (error) {
        this.setState({ error: 'We have some problems with loading...' });
      } finally {
        this.setState({ loading: false });
      }
  }

  render() {
    const { error, loading, images, showLoadButton, modalURL } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        {error && <h2>{error}</h2>}
        {loading && <Loader></Loader>}
        {modalURL && (
          <Modal onClose={this.onCloseModal}>
            <img src={modalURL} alt="" />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
        <ImageGallery
          items={images}
          onClick={this.handleModalUrl}
        ></ImageGallery>
        {showLoadButton && (
          <Button onClick={this.isLoadMore}>Load more...</Button>
        )}
      </Container>
    );
  }
}
