import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/main.css'; // adjust path if your CSS lives elsewhere

// For React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
