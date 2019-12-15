import React from "react";
import PropTypes from "prop-types";

import { Button } from "semantic-ui-react";

const Skill = ({ data }) => {
  const { title } = data;

  return (
    <Button size='tiny' color='teal' className='skill-btn'>
      {title}
    </Button>
  );
};

Skill.propTypes = {
  data: PropTypes.object
};

export default Skill;
