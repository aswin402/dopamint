import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'lenis/dist/lenis.css'
import App from './App.tsx'

// Handle Vite dynamic import chunk failures when a new deployment invalidates old chunk hashes
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  try {
    const key = 'vite_preload_retry_ts';
    const last = sessionStorage.getItem(key);
    const now = Date.now();
    // Only attempt a reload at most once every 30 seconds to prevent any mobile reload loops
    if (!last || now - Number(last) > 30000) {
      sessionStorage.setItem(key, String(now));
      window.location.reload();
    }
  } catch {
    // If storage is disabled/inaccessible (e.g. mobile private mode), ignore to avoid crash
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
