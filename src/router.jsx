import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ui/styles/main.css';
// import HomePage from './ux/pages/HomePage';
import LoginPage from './ux/pages/LoginPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
)
