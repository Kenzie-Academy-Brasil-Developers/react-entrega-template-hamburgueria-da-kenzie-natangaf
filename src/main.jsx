import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyled } from './Styles/GlobalStyled'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled/>
    <App />
  </React.StrictMode>
)
