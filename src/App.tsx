import React from 'react';
import './App.css';
import  {Header} from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/Contacts';
import { Provider } from './components/context';


function App() {
  return (
    <Provider>
    <div className="App">
     <Header branding="Contact Manager"/>
     <div className="container">
     <Contacts />
     </div>
    </div>
    </Provider>
  );
}

export default App;
