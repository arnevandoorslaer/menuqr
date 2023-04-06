import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <React.StrictMode>
      <ChakraProvider>
        <Routes>
          <Route path='/:category/:table' element={<App />}></Route>
          <Route path='/:category' element={<App />}></Route>
          <Route path='/' element={<App />}></Route>
        </Routes>
      </ChakraProvider>
    </React.StrictMode>
  </Router>,
);
