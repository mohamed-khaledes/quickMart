import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// fontAwesome
import 'font-awesome/css/font-awesome.min.css';
// import store {redux}
import store from './Redux/store'
// provider of redux
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
);
