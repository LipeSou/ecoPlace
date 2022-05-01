import React from 'react';
import Router from './routes/Router';
import { GlobalStyles } from './components/GlobalStyles'

const App = () => {
  return (
      <div>
        <GlobalStyles />
        <Router />
      </div>
  );
}

export default App;
