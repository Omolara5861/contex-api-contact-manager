import React from 'react';
import './App.css';
import  {Header} from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts';
import { Provider } from './context';


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
