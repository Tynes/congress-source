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
    return (
      <div>
        <Picture id={this.props.member.id} />
      </div>
    );
  }
}

export default Result;

/*

<Name name={this.props} />
<Info info={true} />
<State state={this.props.state} />
<Timer timer={true} />
*/
