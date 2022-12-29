import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const idRoot = document.getElementById('root')
const createRoot = ReactDOM.createRoot(idRoot)

createRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
