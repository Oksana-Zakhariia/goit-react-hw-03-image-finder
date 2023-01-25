const { Overlay, ModalWindow } = require('./Modal.styled');

export const Modal = ({ modalImageUrl }) => (
  <Overlay>
    <ModalWindow>
      <img src={modalImageUrl} alt="" />
    </ModalWindow>
  </Overlay>
);
