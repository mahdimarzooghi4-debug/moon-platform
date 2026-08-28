import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/vazirmatn';

const container = document.getElementById('app');
if (!container) throw new Error('App container not found');
const root = createRoot(container);
root.render(<App />);
