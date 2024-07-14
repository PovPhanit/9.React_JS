import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// npm i : install all package
// npm run dev  : run script vite
// npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev  : config eslint
// npm i react-router-dom@6  : for use router