import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import '@fontsource/vazirmatn/400.css';
import '@fontsource/vazirmatn/500.css';
import '@fontsource/vazirmatn/600.css';
import '@fontsource/vazirmatn/700.css';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
