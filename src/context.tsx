import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

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
    default:
      return state;
  }
}


export class Provider extends Component {
  state = {
    contacts: [],
    dispatchEvent: (action: any) => {
      this.setState(state => reducer(state, action));
    }
};

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .then(data => this.setState({ contacts: data }));
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

