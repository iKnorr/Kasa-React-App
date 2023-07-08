import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RouterComponent from './components/Router/RouterComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>
);
