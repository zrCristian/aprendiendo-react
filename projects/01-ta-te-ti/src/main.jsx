import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { App } from "./App.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <React.Fragment>
    <App />
  </React.Fragment>
  // </React.StrictMode>
)
 // Main, punto de entrada de nuestra aplicacion.
 // aca construimos la aplicacion, primer archivo que carga y a partir de aca importamos los demas comp.