import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header title="My React Website" />
      <MainContent text="Welcome to my site! Click the button to increment the counter." />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
