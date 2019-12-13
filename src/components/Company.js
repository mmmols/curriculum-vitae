import React from "react";
import PropTypes from "prop-types";

const Company = ({ data }) => {
  const { title } = data;
  return <li>{title}</li>;
};

Company.propTypes = {
  data: PropTypes.object
};

export default Company;
