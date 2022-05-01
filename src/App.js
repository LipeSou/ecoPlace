import React from 'react';
import Router from './routes/Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import { GlobalStyles } from './components/GlobalStyles'

const App = () => {
  return (
      <div>
        <GlobalStyles />
        <Header />
        <Router />
        <Footer/>
      </div>
  );
}

export default App;
