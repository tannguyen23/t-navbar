import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// routes
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </ThemeProvider>
);
