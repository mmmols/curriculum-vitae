import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

import { NavLink } from "react-router-dom";

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
          as='li'
        >
          <NavLink to='/'>CV</NavLink>
        </Menu.Item>

        <Menu.Item
          name='companies'
          active={activeItem === "companies"}
          onClick={this.handleItemClick}
          as='li'
        >
          <NavLink to='/companies'>Companies</NavLink>
        </Menu.Item>

        <Menu.Item
          name='educations'
          active={activeItem === "educations"}
          onClick={this.handleItemClick}
          as='li'
        >
          <NavLink to='/educations'>Educations</NavLink>
        </Menu.Item>

        <Menu.Item
          name='skills'
          active={activeItem === "skills"}
          onClick={this.handleItemClick}
          as='li'
        >
          <NavLink to='/skills'>Skills</NavLink>
        </Menu.Item>

        <Menu.Item
          name='projects'
          active={activeItem === "projects"}
          onClick={this.handleItemClick}
          as='li'
        >
          <NavLink to='/projects'>Projects</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;
