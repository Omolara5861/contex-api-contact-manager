import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact: any) => contact.id !== action.payload)
      }
    default:
      return state;
  }
}


export class Provider extends Component {
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
    dispatch: (action: any) => {
      this.setState(state => reducer(state, action));
    }
};


  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

