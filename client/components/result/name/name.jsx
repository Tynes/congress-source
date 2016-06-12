import React from 'react';

const Name = ({ firstname, lastname }) => {
  const name = `${firstname} ${lastname}`;
  return (
    <h1>{name}</h1>
  );
};

export default Name;
