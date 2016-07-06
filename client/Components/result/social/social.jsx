import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Social = ({ govtrack, twitter, site }) => {
  const twitterid = `https://twitter.com/${twitter}`;
  return (
    <div className="social-bar">
      <RaisedButton
        label="GovTrack"
        linkButton={true}
        href={govtrack}
      />
      <RaisedButton
        label="Twitter"
        linkButton={true}
        href={twitterid}
      />
      <RaisedButton
        label="Personal Site"
        linkButton={true}
        href={site}
      />
    </div>
  );
};

export default Social;
