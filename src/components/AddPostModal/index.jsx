import React, { useContext } from 'react';
import Modal from 'react-modal';
import { AppContext } from '../../context/AppContext';

import { Container } from './styles';

Modal.setAppElement('#root');

export function AddPostModal() {
  const { addModal, closeAddToolModal } = useContext(AppContext);

  return (
    <Modal
      isOpen={addModal}
      onRequestClose={closeAddToolModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content-add-modal"
      closeTimeoutMS={300}
    >
      <Container>
        <h1>
          <span>+</span> Adicionar ferramenta
        </h1>
        <form>
          <label htmlFor="">
            Nome da ferramenta
            <input type="text" placeholder="Nome da ferramenta" required />
          </label>
          <label htmlFor="">
            Link da ferramenta
            <input type="text" placeholder="Full URL" required />
          </label>
          <label htmlFor="">
            Descrição da ferramenta
            <textarea
              type="text"
              placeholder="Breve descrição sobre a ferramenta"
              required
            />
          </label>
          <label htmlFor="">
            TAGS
            <input type="text" placeholder="Separe por espaços" required />
          </label>
          <button>Adicionar ferramenta</button>
        </form>
      </Container>
    </Modal>
  );
}
