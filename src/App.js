import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import AboutMe from './components/About';
import ResumeDownload from './components/ResumeDownload';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Main />
      <AboutMe />
      <ResumeDownload />
      <Skills />
      <Projects />
      <Research />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;
