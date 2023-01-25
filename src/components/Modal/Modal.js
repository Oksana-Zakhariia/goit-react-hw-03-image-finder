import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
const { Overlay, ModalWindow } = require('./Modal.styled');
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow> {this.props.children}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
