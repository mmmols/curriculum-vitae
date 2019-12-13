import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ data }) => {
    const { title } = data;

    return (
        <li>{title}</li>
    )
};

Skill.propTypes = {
    data: PropTypes.object
}

export default Skill;