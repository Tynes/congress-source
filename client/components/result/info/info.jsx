import React from 'react';

const Info = ({ party, state, role_type_label }) => {
  const html = `${party} ${role_type_label} • ${state}`;
  return (
    <div className="info">
      {html}
    </div>
  );
};

Info.propTypes = {
  party: React.PropTypes.string,
  state: React.PropTypes.string,
  role_type_label: React.PropTypes.string,
};

export default Info;
