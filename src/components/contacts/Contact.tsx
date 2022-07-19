import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Consumer } from "../../context";
import axios from 'axios';

interface IContact {
  id: number,
  name: string,
  email: string,
  phone: string
}

export default class Contact extends Component<IContact> {
  static propTypes: { 
    name: PropTypes.Validator<string>; 
    email: PropTypes.Validator<string>; 
    phone: PropTypes.Validator<string>; 
  };

  state = {
    showContactInfo: false
  }

  // Firstway to change the state of the component
  // onShowClicked = () => {
  //   this.setState({showContactInfo: !this.state.showContactInfo})
  // }

  onDeleteClicked = (id: number, dispatchEvent: any) => {   
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => dispatchEvent({ type: 'DELETE_CONTACT', payload: id }))
  }

  render() {
    const {id, name, email, phone} = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatchEvent} = value;

          return (
            <div className="card card-body mb-3">
        <h4>{name}
        <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} className="fa-solid fa-sort-down" style={{cursor: 'pointer'}}></i>
        <i className="fa-solid fa-times"
            style={{float: 'right', color: 'red', cursor: 'pointer'}}
            onClick={this.onDeleteClicked.bind(this, id, dispatchEvent)}></i>
        </h4>
        {this.state.showContactInfo ?<ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul> : null}
      </div>
          )
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired}
