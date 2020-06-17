import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>Stories written by Watson</h1>
      {/* <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |
      <Link style={linkStyle} to="/about">
        About
      </Link>{" "} */}
    </header>
  );
}

const h1Style = {
  fontFamily: "Patrick Hand",
  fontSize: "50px",
};
const headerStyle = {
  background: "#458eed",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontFamily: "Patrick Hand",
};

export default Header;
