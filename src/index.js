import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for ReactDOM
root.render(
  <React.StrictMode>
     <Provider store={store}>
     
       <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals(); // Report web vitals (performance metrics)
