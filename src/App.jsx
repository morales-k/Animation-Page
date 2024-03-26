import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AnimationList from "./Components/AnimationList";
import Circle from './Components/Circle';

function App() {

  return (
    <div className="app">
      <Header />
      <AnimationList />
      <Circle size="md" />
      <Circle size="md-alt" />
      <Circle size="sm-alt" />
      <Footer />
    </div>
  )
}

export default App
