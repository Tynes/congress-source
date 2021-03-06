import React from 'react';

const Picture = ({ id }) => {
  const url = `https://www.govtrack.us/data/photos/${id}-100px.jpeg`;
  return (
    <div className="result-top img-pad">
      <img src={url} className="picture" alt="face" />
    </div>
  );
};

Picture.propTypes = {
  id: React.PropTypes.number,
};

export default Picture;
