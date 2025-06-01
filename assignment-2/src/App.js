import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Header title="My React Site" />
      <MainContent text="Welcome to the main content area!" />
      <Footer year={currentYear} />
    </div>
  );
}

export default App;
