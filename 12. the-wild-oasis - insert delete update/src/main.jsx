import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import styled, { createGlobalStyle } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//First
//============
//npm i : all package in react
//=================
//second (Create file : .eslintrc.json)
//=================
// npm install --save-dev vite-plugin-eslint eslint-config-react-app eslint  : for fix eslint
// ---------Code Eslint--------
// {
//   "extends":"react-app"
// }
// -------------------------------
// import eslint to vite and add plugin
// ===============
// npm i styled-components : use style css
// =================
// npm i react-router-dom@6 : for router
// ====================
// npm i react-icons  : for icons


// ===========================
// npm install --save @supabase/supabase-js : DATABASE SUPABASE 
  // - create table
  // - Enable read access for all users (authentication -> policies)
  // - create New bucket for contain Image (Storage)
  // - import initializing to supabase and change supabasekey (API docs)
  // - replace Project API keys to supabasekey (project setting->API)
  // - find API table for use (API docs -> table)

  // ==============
  // npm i @tanstack/react-query@4
  // npm i @tanstack/react-query-devtools
  // npm i date-fns


  //npm i react-hot-toast
  // npm i react-hook-form@7












// createGlobalStyle : for create global css
// styled.variTag` cssProperties ` : for use Element and have style
//css` cssProperties ` : foe use css

// ${(props)=> variObj[props.attrElement]} : for set attri in element and different style
// variStyled.defaultProps={
// att:'exp'
// }         : for set default attri when element dont have



// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       //time to fetch data
//       staleTime: 60 * 1000,
//     },
//   },
// });

/* <QueryClientProvider client={queryClient}>
  <ReactQueryDevtools />
  //block Element
</QueryClientProvider> */

