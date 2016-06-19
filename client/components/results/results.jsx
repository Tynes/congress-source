import React from 'react';
import _ from 'underscore';
import Result from '../result/result.jsx';
import Infinite from 'react-infinite';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="members">
        {_.map(this.props.members, member =>
          <Result member={member} />
        )}
      </div>
    );
  }
}

export default Results;

// <Infinite
  // elementHeight={320}
  // containerHeight={320 * 4}
  // infiniteLoadBeginEdgeOffset={200}
  // onInfiniteLoad={this.props.getMembersBetween(this.props.end - 16, this.props.end)}
// >
  // {this.props.members}
// </Infinite>
