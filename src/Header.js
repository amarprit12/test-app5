import React from "react";

function Header(props) {
  console.log("props: ", props);
  // props.name = "yes";
  // printing Object.key
  return <h1>Hello {props.name} !!, this is header component</h1>;
}

export default Header;
