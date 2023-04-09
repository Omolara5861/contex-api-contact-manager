import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value: any) => {
          const { contacts } = value;
          return (
            <>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map((contact: any) => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}
