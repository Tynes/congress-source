import React from 'react';
import Name from './name/name.jsx';
import Picture from './picture/picture.jsx';
import Timer from './timer/timer.jsx';
import Social from './social/social.jsx';
import Info from './info/info.jsx';

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
        <Picture id={member.id} />
        <Info
          party={member.party}
          state={member.state}
          role_type_label={member.role_type_label}
        />
        <Name
          firstname={member.firstname}
          lastname={member.lastname}
        />
        <Timer
          enddate={member.enddate}
          isCountdown={this.state.isCountdown}
        />
        <Social
          govtrack={member.link}
          twitter={member.twitterid}
          site={member.website}
        />
      </div>
    );
  }
}

Result.propTypes = {
  member: React.PropTypes.object,
};

export default Result;
