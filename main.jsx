import React from 'react';
import ReactDOM from 'react-dom/client';
import InformatikaWeb from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="93601709051-h9sqi2r878ouml30pk9dv83j4pag3mcc.apps.googleusercontent.com">
      <InformatikaWeb />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
