import React from "react";
import PropTypes from "prop-types";

import { Item } from "semantic-ui-react";

const Company = ({ data }) => {
  const { title, position, started_at, ended_at, logo } = data;

  return (
    <Item>
      <Item.Image size='tiny' src={logo} />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a'>{title}</Item.Header>
        <Item.Meta>
          {started_at} - {ended_at}
        </Item.Meta>
        <Item.Description>{position}</Item.Description>
      </Item.Content>
    </Item>
  );
};

Company.propTypes = {
  data: PropTypes.object.isRequired
};

export default Company;
