import React from "react";
import PropTypes from 'prop-types'

export const Header =  (props: any) => {
  const { branding} = props;
  return (
    <div>
      <h1 style={headingStyle}>{branding}</h1>
    </div>
  );
} 
// Default Props
Header.defaultProps = {
  branding: "Contact Manager"
}

// Check if the props are valid
Header.propTypes = {
  branding: PropTypes.string.isRequired
}

// Style for the heading - This is a CSS style object
const headingStyle = {
  color: "green",
  fontSize: '50px'
}