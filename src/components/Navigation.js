import React from "react";

import NavLink from "./NavLink";

const Navigation = () => (
  <nav>
    <ul>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/companies'>Companies</NavLink>
      <NavLink to='/educations'>Educations</NavLink>
      <NavLink to='/skills'>Skills</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
    </ul>
  </nav>
);

export default Navigation;
