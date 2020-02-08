import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import Footer from './Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default Router;
