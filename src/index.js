import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import './scss/main.scss';
import { BrowserRouter } from "react-router";
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './stateManagement/appStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <GoogleOAuthProvider clientId='956000641584-m82tfgcjco53fc4run8frmdjl7meukho.apps.googleusercontent.com'>
   <BrowserRouter>
    <App />
  </BrowserRouter>
  </GoogleOAuthProvider>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
