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
        ],
    };
    
  render() {
    const { contacts } = this.state;
    return <>
        {contacts.map(contact => (
            <Contact key={contact.id}
            name={contact.name} email={contact.email} phone={contact.phone}/>
        ))}
    </>;
  }
}
