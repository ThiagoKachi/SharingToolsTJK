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

// Fazer funcionalidade de adicionar ferramenta
// Fazer autenticação com github && pegar user e avatar para colocar no Header
// Deixar remover apenas se o usuário for o mesmo que criou
// Página de erro 404
