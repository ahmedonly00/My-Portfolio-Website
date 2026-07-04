import React from 'react';
import Background3D from './components/Background3D';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Background3D />
      <Navigation />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        color: '#67e8f9',
        background: 'rgba(15,23,42,0.95)',
        padding: '2rem 0 1rem 0',
        fontSize: '1rem',
        borderTop: '1px solid rgba(6,182,212,0.2)',
        marginTop: '2rem',
        zIndex: 1000
      }}>
        &copy; 2025 Ahmed Ndayizeye. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
