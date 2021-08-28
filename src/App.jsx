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

// Abrir modal antes de excluir item
// Fazer funcionalidade de adicionar ferramenta
// Fazer autenticação com github && pegar user e avatar para colocar no Header
// Deixar remover apenas se o usuário for o mesmo que criou
