import React from 'react';
import Head from './components/head';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Experience from './components/sections/experience';
import Projects from './components/sections/projects';

import Footer from './components/sections/footer';

function App() {
  return (
    <React.Fragment>
      <div>
      <Head />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
