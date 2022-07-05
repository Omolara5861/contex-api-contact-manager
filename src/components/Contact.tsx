import React, { Component } from "react";
import PropTypes from 'prop-types'

interface IContact {
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


  onShowClicked(e: string){
    console.log(e)
  }

  render() {
    const {name, email, phone} = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name}
        <i onClick={this.onShowClicked.bind(this, email)} className="fa-solid fa-sort-down"></i>
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}
