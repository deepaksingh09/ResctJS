import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//importing Comp2
import Comp2 from './components/Comp2.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Comp2 />
  </React.StrictMode>,
)
