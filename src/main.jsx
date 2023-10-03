//Se comento la importación de REACT para evitar que se renderice doble vez la solicitud en al hacer uso de use effect
//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
    <App />
//  </React.StrictMode>,
)
