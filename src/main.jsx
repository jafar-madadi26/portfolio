import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { routerBasename } from './config/appConfig.js';
import { ThemeProvider } from './components/ThemeProvider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={routerBasename}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
