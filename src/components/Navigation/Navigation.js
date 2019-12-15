import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

import NavLink from "./NavLink";

import "./index.scss";

class Navigation extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary vertical>
        <Menu.Item
          name='home'
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <NavLink to='/'>CV</NavLink>
        </Menu.Item>

        <Menu.Item
          name='companies'
          active={activeItem === "companies"}
          onClick={this.handleItemClick}
        >
          <NavLink className='navigation__item__link' to='/companies'>
            Companies
          </NavLink>
        </Menu.Item>

        <Menu.Item
          name='educations'
          active={activeItem === "educations"}
          onClick={this.handleItemClick}
        >
          <NavLink to='/educations'>Educations</NavLink>
        </Menu.Item>

        <Menu.Item
          name='skills'
          active={activeItem === "skills"}
          onClick={this.handleItemClick}
        >
          <NavLink to='/skills'>Skills</NavLink>
        </Menu.Item>

        <Menu.Item
          name='projects'
          active={activeItem === "projects"}
          onClick={this.handleItemClick}
        >
          <NavLink to='/projects'>Projects</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;
