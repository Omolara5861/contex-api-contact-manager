import React from "react";

export const Header =  (props: any) => {
  const { branding} = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
} 

Header.defaultProps = {
  branding: "Default Header"
}