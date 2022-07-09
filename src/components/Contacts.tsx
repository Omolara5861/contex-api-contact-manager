import React, { Component } from "react";
import Contact from './Contact';

export default class Contacts extends Component {
    
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "jdoe@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Karen Smith",
                email: "karen@gmail.com",
                phone: "333-333-3333"
            },
            {
                id: 3,
                name: "Sherlock Holmes",
                email: "sherlock@gmail.com",
                phone: "888-888-8888"
            }
        ]
    };

    deleteContact = (id: number) => {
        const {contacts} = this.state;

        // Filter out the contact with the given id and return the new array of contacts without the deleted one
        const newContacts = contacts.filter(contact => contact.id !== id);

        // setting contacts to newContacts without the deleted contact 
        this.setState({contacts: newContacts})
    }   // end deleteContact method 

    
  render() {
    const { contacts } = this.state;
    return <>
        {contacts.map(contact => (
            <Contact key={contact.id}
            name={contact.name} email={contact.email} phone={contact.phone}
            deleteClickHandler={() => this.deleteContact(contact.id)}
            />
        ))}
    </>;
  }
}
