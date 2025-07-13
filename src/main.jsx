import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UseRefForm } from './Components/UseRefForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseRefForm/>
  </StrictMode>,
)
