import React from 'react';

const Name = ({ firstname, lastname }) => {
  const name = `${firstname} ${lastname}`;
  return (
    <h1 className="name">{name}</h1>
  );
};

export default Name;
