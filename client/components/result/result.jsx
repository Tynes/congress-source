import React from 'react';
import Name from './name/name.jsx';
import Affiliation from './affiliation/affiliation.jsx';
import Role from './role/role.jsx';
import Picture from './picture/picture.jsx';
import State from './state/state.jsx';
import Timer from './timer/timer.jsx';
import Social from './social/social.jsx';

class Result extends React.Component {
  constructor() {
    super();
    this.state = {
      isCountdown: false,
    };
  }
  componentWillMount() {
    console.log(this.props);
  }
  handleCountdownChange(e) {
    e.preventDefault();
    this.setState({ isCountdown: !this.state.isCountdown });
  }
  handleTouchTap(e) {
    e.preventDefault();
    if (e.type === 'touchend') {
      this.handleCountdownChange(e);
    }
  }
  render() {
    const member = this.props.member;
    return (
      <div
        className="member"
        onMouseEnter={(e) => this.handleCountdownChange(e)}
        onMouseLeave={(e) => this.handleCountdownChange(e)}
        onTouchTap={e => this.handleTouchTap(e)}
      >
        <div>
          <State state={member.state} />
          <Picture id={member.id} />
          <Timer
            enddate={member.enddate}
            isCountdown={this.state.isCountdown}
          />
        </div>
        <div>
          <Affiliation party={member.party} />
          <Role role={member.role_type_label} />
        </div>
        <Name firstname={member.firstname} lastname={member.lastname} />
        <Social govtrack={member.link} twitter={member.twitterid} site={member.website} />
      </div>
    );
  }
}

export default Result;
