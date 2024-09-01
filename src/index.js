import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { ReactLenis } from 'lenis/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider >
      <ReactLenis root>
        <App />
      </ReactLenis>

    </ChakraProvider>
  </React.StrictMode>
);

