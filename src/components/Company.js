import React from 'react';

const Company = ({ data }) => {
    const { id, title } = data;
    return (
        <li key={id}>{title}</li>
    );
};


export default Company;