import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeModeProvider } from './context/ThemeModeContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <App />
    </ThemeModeProvider>
  </React.StrictMode>,
)
