import React from "react";
import { memo } from "react";
import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <h1>React Calculator</h1>
  </div>
);

export default memo(Navbar);
