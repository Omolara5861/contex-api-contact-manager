import React, { Component } from "react";
import Contact from './Contact';
import { Consumer } from '../../context';

export default class Contacts extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return  (
         <>
        {contacts.map((contact: any) => (
            <Contact key={contact.id} 
            id={contact.id} name={contact.name} email={contact.email} phone={contact.phone}
            />
        ))}
        </>
          )
        }}
      </Consumer>
    );    
  }
}
