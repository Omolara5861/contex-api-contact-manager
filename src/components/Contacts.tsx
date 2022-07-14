import React, { Component } from "react";
import Contact from './Contact';
import { Consumer } from './context';

export default class Contacts extends Component {

    deleteContact = (id: number) => {
        const {contacts} = this.state;

        // Filter out the contact with the given id and return the new array of contacts without the deleted one
        const newContacts = contacts.filter ((contact: any) => contact.id !== id);

        // setting contacts to newContacts without the deleted contact 
        this.setState({contacts: newContacts})
    }   // end deleteContact method 

    
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return  (
         <>
        {contacts.map((contact: any) => (
            <Contact key={contact.id}
            name={contact.name} email={contact.email} phone={contact.phone}
            deleteClickHandler={() => this.deleteContact(contact.id)}
            />
        ))}
        </>
          )
        }}
      </Consumer>
    );    
  }
}
