import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import global_en from './languages/english/translation.json'
import global_kh from './languages/khmer/translation.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation:{escapeValue:false},
  lng:"en",
  resources:{
    en:{
      global:global_en
    },
    kh:{
      global:global_kh
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
