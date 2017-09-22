import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';

import Store from './app/store/store'
import history from './app/history'
import App from './app/app';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
   document.getElementById('root')
);

registerServiceWorker();