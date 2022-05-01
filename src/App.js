import React from 'react';
import Router from './routes/Router';
import Footer from './components/footer/Footer';
import { GlobalStyles } from './components/GlobalStyles'

const App = () => {
  return (
      <div>
        <GlobalStyles />
        <Router />
        <Footer/>
      </div>
  );
}

export default App;
