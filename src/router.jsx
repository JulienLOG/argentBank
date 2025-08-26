import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ui/styles/main.css';
// import HomePage from './ux/pages/HomePage';
// import LoginPage from './ux/pages/LoginPage';
import ProfilePage from './ux/pages/ProfilePage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfilePage />
  </StrictMode>,
)
