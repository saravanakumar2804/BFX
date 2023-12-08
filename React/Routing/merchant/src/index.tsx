import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing_app from './Routing_app';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routing_app/>
   </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
