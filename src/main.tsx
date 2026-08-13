import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './astro-theme.css'
import './astro-banner.css'

createRoot(document.getElementById("root")!).render(<App />);
