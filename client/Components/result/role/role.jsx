import React from 'react';

const Role = ({ role }) => <h3 className="result-middle">{role}</h3>;

Role.propTypes = {
  role: React.PropTypes.string,
};

export default Role;
