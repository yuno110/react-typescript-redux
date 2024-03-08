import React from 'react';
import ReactDom from 'react-dom/client';
import App from './component/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <Provider store={store}>
    <App />
  </Provider>
);
