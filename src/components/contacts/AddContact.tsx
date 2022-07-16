import React, { Component } from 'react'
import { Consumer } from '../../context';
import * as uuid from 'uuid';

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }
    onChange = (e: any) => this.setState({[e.target.name]: e.target.value});
    
    onSubmit = (dispatchEvent:any, e: any) => {
        e.preventDefault();
        
        const {name, email, phone} = this.state;

        const newContact = {
            id: uuid.v4(),
            name,
            email,
            phone
        }
        dispatchEvent({type: 'ADD_CONTACT', payload: newContact});

        // Clear the form
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }
       
  render() {
    const { name, email, phone } = this.state;
    return (
    <Consumer>
        {value => {
            const {dispatchEvent} = value;
        return(
      <div className='card mb-3'>
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>
            <form onSubmit={this.onSubmit.bind(this, dispatchEvent)}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' className='form-control form-control-lg' 
                    placeholder='Enter Name....'
                    value={name}
                    onChange={this.onChange}/>
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' className='form-control form-control-lg' 
                    placeholder='Enter Email....'
                    value={email}
                    onChange={this.onChange}/>
                </div>

                <div className='form-group'>
                    <label htmlFor='phone'>Phone</label>
                    <input type='tel' name='phone' className='form-control form-control-lg' 
                    placeholder='Enter Phone....'
                    value={phone}
                    onChange={this.onChange}/>
                </div>
                <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
            </form>
        </div>
      </div>
      );
      }
      }
      </Consumer>
    );
}
}
