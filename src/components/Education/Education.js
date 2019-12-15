import React from "react";
import PropTypes from "prop-types";

const Education = ({ data }) => {
  const { education, school, started_at, ended_at } = data;

  return (
    <li>
      {education}, {school}
    </li>
  );
};

Education.propTypes = {
  data: PropTypes.object
};

export default Education;
