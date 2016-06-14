import React from 'react';
import Name from './name/name.jsx';
import Affiliation from './affiliation/affiliation.jsx';
import Role from './role/role.jsx';
import Picture from './picture/picture.jsx';
import State from './state/state.jsx';
import Timer from './timer/timer.jsx';
import Social from './social/social.jsx';

class Result extends React.Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    const member = this.props.member;
    return (
      <div className="member">
        <Picture id={member.id} />
        <State state={member.state} />
        <Timer enddate={member.enddate} />
        <Affiliation party={member.party} />
        <Role role={member.role_type_label} />
        <Name firstname={member.firstname} lastname={member.lastname} />
        <Social govtrack={member.link} twitter={member.twitterid} site={member.website} />
      </div>
    );
  }
}

export default Result;
