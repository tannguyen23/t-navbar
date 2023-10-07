import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// routes
import { RouterProvider } from 'react-router';
import { router } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);
