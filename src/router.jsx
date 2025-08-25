import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ui/styles/main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>Hello world</div>
  </StrictMode>,
)
