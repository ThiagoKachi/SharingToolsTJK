import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { AppContext } from '../../context/AppContext';

import { Container } from './styles';

Modal.setAppElement('#root');

export function DeleteModal() {
  const { modalIsOpen, closeModal, getPostId, getId } = useContext(AppContext);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      closeTimeoutMS={300}
    >
      <Container>
        <p>
          <span>X</span> Remover Post
        </p>
        <h3>Tem certeza que deseja remover o post?</h3>
        <button onClick={closeModal}>Cancelar</button>
        <button onClick={() => getPostId(getId)}>Sim, remover</button>
      </Container>
    </Modal>
  );
}

DeleteModal.propTypes = {
  idPost: PropTypes.number,
};
