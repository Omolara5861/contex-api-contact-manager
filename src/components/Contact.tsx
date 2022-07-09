import React, { Component } from "react";
import PropTypes from 'prop-types'

interface IContact {
  name: string,
  email: string,
  phone: string,
  deleteClickHandler: () => void
}

export default class Contact extends Component<IContact> {
  static propTypes: { 
    name: PropTypes.Validator<string>; 
    email: PropTypes.Validator<string>; 
    phone: PropTypes.Validator<string>; 
    deleteClickHandler: PropTypes.Validator<() => void>;
  };

  state = {
    showContactInfo: true
  }

  // Firstway to change the state of the component
  // onShowClicked = () => {
  //   this.setState({showContactInfo: !this.state.showContactInfo})
  // }

  onDeleteClicked = () => {
    this.props.deleteClickHandler(); 
  }

  render() {
    const {name, email, phone} = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name}
        <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} className="fa-solid fa-sort-down" style={{cursor: 'pointer'}}></i>
        <i className="fa-solid fa-times"
            style={{float: 'right', color: 'red', cursor: 'pointer'}}
            onClick={this.onDeleteClicked}></i>
        </h4>
        {this.state.showContactInfo ?<ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul> : null}
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
}
