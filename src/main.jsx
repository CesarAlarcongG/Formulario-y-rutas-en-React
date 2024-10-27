import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './Layaouts/Navbar/Navbar.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
