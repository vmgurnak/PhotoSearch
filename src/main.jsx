import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import App from './App.jsx';
import './index.css';

// import library React Modal
// npm install react-modal
import Modal from 'react-modal';
// Modal.setAppElement
Modal.setAppElement(document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
