import React from 'react';
import './App.css';
import Contact from './components/Contact';
import  {Header} from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Header branding="Contact Manager"/>
     <div className="container">
     <Contact name="John Doe" email="john@gmail.com" phone="555-555-5555"/>
     <Contact name="Karen Doe" email="karen@gmail.com" phone="777-777-7777"/>
     </div>
    </div>
  );
}

export default App;
