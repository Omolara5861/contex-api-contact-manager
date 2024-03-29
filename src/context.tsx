import React, { Component } from 'react'
import axios from 'axios';



const Context = React.createContext({});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact: any) => contact.id !== action.payload)
      }
      case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
      case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact: any) => contact.id === action.payload.id ? action.payload : contact)
      }
    default:
      return state;
  }
}

export class Provider extends Component<any> {
  state = {
    contacts: [],
    dispatchEvent: (action: any) => {
      this.setState((state: any )=> reducer(state, action));
    }
};

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

