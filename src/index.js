import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Site from './Site';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <Site />
  </BrowserRouter>
);


