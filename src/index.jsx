import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from './context/AppProvider';
import { Authprovider } from './context/AuthProvider';

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <Authprovider>
        <App />
      </Authprovider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
