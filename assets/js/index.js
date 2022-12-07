import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

const root = ReactDOM.createRoot(<Nav />, getElementById('header'));
root.render(
    <React.StrictMode>
    <Nav />
  </React.StrictMode>
)


