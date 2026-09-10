import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'lenis/dist/lenis.css'
import App from './App.tsx'

// Handle Vite dynamic import chunk failures when a new deployment invalidates old chunk hashes
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  const hasReloaded = sessionStorage.getItem('vite_preload_retry');
  if (!hasReloaded) {
    sessionStorage.setItem('vite_preload_retry', 'true');
    window.location.reload();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
