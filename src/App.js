import React from 'react';
import Background3D from './components/Background3D';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Background3D />
      <Navigation />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        color: '#b08cff',
        background: 'rgba(26,26,46,0.95)',
        padding: '2rem 0 1rem 0',
        fontSize: '1rem',
        borderTop: '1px solid rgba(140,0,176,0.2)',
        marginTop: '2rem',
        zIndex: 1000
      }}>
        &copy; 2025 Ahmed Ndayizeye. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App; 