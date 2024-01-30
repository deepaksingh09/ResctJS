import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//importing Comp1
import Comp1 from './components/Comp1.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Comp1 />
  </React.StrictMode>,
)
