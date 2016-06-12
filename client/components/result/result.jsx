import React from 'react';
import Name from './name/name.jsx';
import Info from './info/info.jsx';
import Picture from './picture/picture.jsx';
import State from './state/state.jsx';
import Timer from './timer/timer.jsx';

class Result extends React.Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    const member = this.props.member;
    return (
      <div>
        <Picture id={member.id} />
        <State state={member.state} />
        <Name firstname={member.firstname} lastname={member.lastname} />
      </div>
    );
  }
}

export default Result;

/*

<Info info={true} />
<State state={this.props.state} />
<Timer timer={true} />
*/
