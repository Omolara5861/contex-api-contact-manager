import React from "react";

export function Header(props: any) {
  const { branding} = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
}
