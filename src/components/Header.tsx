import React from "react";
import PropTypes from 'prop-types'

export const Header =  (props: any) => {
  const { branding} = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
} 
// Default Props
Header.defaultProps = {
  branding: "Contact Manager"
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}