import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/desktop/App.jsx';
import AppMobile from  "./components/mobile/AppMobile.jsx";

const width = window.innerWidth;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { width > 480 ? <App /> : <AppMobile/>}
  </React.StrictMode>,
)
