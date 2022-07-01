import React, { Component } from "react";

interface IContact {
  name: string,
  email: string,
  phone: string
}

export default class Contact extends Component<IContact> {
  render() {
    const {name, email, phone} = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}
