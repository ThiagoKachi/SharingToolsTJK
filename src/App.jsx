import React from 'react';

import { GlobalStyle } from './globalStyles';
import { Routes } from './routes';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;

// Tratar erro ao fechar o modal de login google: The popup has been closed by the user before finalizing the operation. (auth/popup-closed-by-user).
// Organizar importacao de arquivos(module alias)
