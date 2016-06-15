import React from 'react';

const Picture = ({ id }) => {
  const url = `https://www.govtrack.us/data/photos/${id}-100px.jpeg`;
  return (
    <div>
      <img src={url} className="picture" />
    </div>
  );
};

export default Picture;
