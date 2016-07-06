import React from 'react';

const Info = ({ party, state, role_type_label }) => {
  const html = `${party} ${role_type_label} • ${state}`;
  return (
    <div className="info">
      {html}
    </div>
  );
};

export default Info;
