import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  flex: '1 1 30em',
  display: 'flex',
};
const innerStyle = {
  flex: '1 1 20em',
};

const Social = ({ govtrack, twitter, site }) => {
  const twitterid = `https://twitter.com/${twitter}`;
  return (
    <div className="social-bar">
      <RaisedButton
        label="GovTrack"
        linkButton={true}
        href={govtrack}
        style={style}
        labelStyle={innerStyle}
      />
      <RaisedButton
        label="Twitter"
        linkButton={true}
        href={twitterid}
        style={style}
        labelStyle={innerStyle}
      />
      <RaisedButton
        label="Website"
        linkButton={true}
        href={site}
        style={style}
        labelStyle={innerStyle}
      />
    </div>
  );
};

Social.propTypes = {
  govtrack: React.PropTypes.string,
  twitter: React.PropTypes.string,
  site: React.PropTypes.string,
};

export default Social;
