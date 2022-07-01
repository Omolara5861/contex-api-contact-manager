import React from 'react';
import './App.css';
import Contact from './components/Contact';
import  {Header} from './components/Header';

function App() {
  return (
    <div className="App">
     <Header branding="Contact Manager"/>
     <Contact name="John Doe" email="john@gmail.com" phone="555-555-5555"/>
     <Contact name="Karen Doe" email="karen@gmail.com" phone="777-777-7777"/>
    </div>
  );
}

export default App;
