import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ui/styles/main.css';
import HomePage from './ux/pages/HomePage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
