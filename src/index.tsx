import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import App from './App';
import theme from './components/ui/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
