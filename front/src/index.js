import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from 'bootstrap'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "./app/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App className={bootstrap}/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
