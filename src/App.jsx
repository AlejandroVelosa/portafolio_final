import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Themes from './components/shared/Themes';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/porftfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <div className='app'>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
