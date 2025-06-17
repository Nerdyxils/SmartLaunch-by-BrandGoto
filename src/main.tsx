import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SmartLaunchDemo from './SmartLaunchDemo'
import './tailwind-backup.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmartLaunchDemo />
  </StrictMode>,
) 