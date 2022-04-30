import React from 'react';
import Router from './routes/Router';
import Header from './components/header/Header';
import { GlobalStyles } from './components/GlobalStyles'

const App = () => {
  return (
      <div>
        <GlobalStyles />
        <Header />
        <Router />
      </div>
  );
}

export default App;
