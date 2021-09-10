import React, { useContext } from 'react';
import Modal from 'react-modal';
import { AppContext, AuthContext } from '../../context/AppContext';

import { Container } from './styles';

Modal.setAppElement('#root');

export function AddPostModal() {
  const {
    addModal,
    closeAddToolModal,
    mySubmitFunction,
    toolName,
    setToolName,
    toolLink,
    setToolLink,
    toolDescription,
    setToolDescription,
    toolTags,
    setToolTags,
    createToolPost,
    verifyIfFieldsNotNull,
  } = useContext(AppContext);

  const { verifyEmail, verifyName } = useContext(AuthContext);

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
        <form onSubmit={mySubmitFunction}>
          <label htmlFor="">
            Nome da ferramenta
            <input
              type="text"
              placeholder="Nome da ferramenta"
              required
              value={toolName}
              onChange={(e) => setToolName(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Link da ferramenta
            <input
              type="text"
              placeholder="Full URL"
              required
              value={toolLink}
              onChange={(e) => setToolLink(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Descrição da ferramenta
            <textarea
              type="text"
              placeholder="Breve descrição sobre a ferramenta"
              required
              value={toolDescription}
              onChange={(e) => setToolDescription(e.target.value)}
            />
          </label>
          <label htmlFor="">
            TAGS
            <input
              type="text"
              placeholder="Separe por espaços"
              required
              value={toolTags}
              onChange={(e) => setToolTags(e.target.value)}
            />
          </label>
          <button
            onClick={() =>
              createToolPost(
                toolName,
                toolLink,
                toolDescription,
                toolTags,
                verifyName(),
                verifyEmail()
              )
            }
            disabled={verifyIfFieldsNotNull()}
          >
            Adicionar ferramenta
          </button>
        </form>
      </Container>
    </Modal>
  );
}
