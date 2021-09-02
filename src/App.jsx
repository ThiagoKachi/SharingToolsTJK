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

// Fazer funcionalidade de adicionar ferramenta e abrir modal para isso
// Fazer autenticação com github && pegar user e avatar para colocar no Header / Firebase?
// Deixar remover apenas se o usuário for o mesmo que criou
// Ajustar bug de pesquisa
