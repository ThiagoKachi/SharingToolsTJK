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

// Ao adicionar ferramenta, atualizar a lista com o post novo
// Fazer autenticação com github && pegar user e avatar para colocar no Header / Firebase?
// Deixar remover apenas se o usuário for o mesmo que criou
// Ajustar bug de pesquisa
// Ajustar bug 'checked' ao carregar a página
