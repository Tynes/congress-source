import React from 'react';

const Name = ({ firstname, lastname }) => {
  const name = `${firstname} ${lastname}`;
  return (
    <h1 className="name">{name}</h1>
  );
};

Name.propTypes = {
  firstname: React.PropTypes.string,
  lastname: React.PropTypes.string,
};

export default Name;
