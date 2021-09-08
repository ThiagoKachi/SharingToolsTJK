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

// Fazer tratamento de erros quando o usuário estiver logado ou não
// Voltar para a página de login caso o usuário não esteja mais autenticado / ao atualiza a página enquanto logado
// Definir se a autenticação vai ser por github e/ou google
