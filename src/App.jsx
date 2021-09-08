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

// Salvar nome do usuário ao criar post(autenticado)
// Fazer tratamento de erros quando o usuário estiver logado ou não
// Definir se a autenticação vai ser por github e/ou google
