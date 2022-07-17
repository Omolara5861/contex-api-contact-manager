import React from 'react';
import PropTypes from 'prop-types';

export default function TextInputGroup({
    label,
    type,
    name,
    placeholder,
    value,
    onChange
}: any) {
  
  return (
    <div className='form-group'>
    <label htmlFor={name}>{label}</label>
    <input type={type} 
    name={name} 
    className='form-control form-control-lg' 
    placeholder={placeholder}
    value={value}
    onChange={onChange}/>
</div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

TextInputGroup.defaultProps = {
  type: 'text'
}