import React from "react";
import { Link } from "react-router-dom";

const NavLink = props => (
  <li>
    <Link {...props} />
  </li>
);

export default NavLink;
