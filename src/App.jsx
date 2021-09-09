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

// Separar os contextos da aplicação em mais arquivos(organizar)
// Tratar erro ao fechar o modal de login google
// Definir o estilo do app
