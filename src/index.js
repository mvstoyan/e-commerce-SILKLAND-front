import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
     <Auth0Provider
    domain="dev-r8i15seori282ic3.us.auth0.com"
    clientId="PqzyM58gJlpXWHhKhirYmBAQNIBtaotr"
    redirectUri={window.location.origin}
  >
       <App />
       </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
