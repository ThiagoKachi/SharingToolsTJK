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

// Ajustar bug de pesquisa por tags
// Ajustar bug 'checked' ao carregar a página

// Fazer autenticação com github && pegar user e avatar para colocar no Header / Firebase?
// Deixar remover apenas se o usuário for o mesmo que criou

// Ajustar loader(posição em diferentes tamanhos de tela)
