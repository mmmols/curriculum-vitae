import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ data }) => {
    const { title } = data;

    return (
        <li>{title}</li>
    )
};

Project.propTypes = {
    data: PropTypes.object
}

export default Project;