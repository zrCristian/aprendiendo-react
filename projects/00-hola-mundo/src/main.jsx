import React from 'react'  // dependencia
import ReactDOM from 'react-dom/client'
import { App } from "./App.jsx"
import "./index.css"

// const appDomElement = document.getElementById('root')
// const root = ReactDOM.createRoot(appDomElement)

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App/>

  
  </React.Fragment>,
)











// import React from "https://esm.sh/react@18.2.0"
// import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

// const appDomElement = document.getElementById("app")

// const root = ReactDOM.createRoot(appDomElement)

// const button = React.createElement("button", { "data-id": 123, "class": "color" }, "Boton 1")
// const button2 = React.createElement("button", { "data-id": 456, "class": "color" }, "Boton 2")
// const button3 = React.createElement("button", { "data-id": 789, "class": "color" }, "Boton 3")

// const app = React.createElement(React.Fragment, null, [button, button2, button3])

// root.render(app)



