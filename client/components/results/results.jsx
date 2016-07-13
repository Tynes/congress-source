import React from 'react';
import _ from 'underscore';
import Result from '../result/result.jsx';
import Placeholder from '../result/placeholder.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  addPlaceholders(currentSize, targetSize) {
    console.log('add', targetSize - currentSize);
    return _.times(targetSize - currentSize, n => <Placeholder key={n * 1000} />);
  }

  buildCards(members) {
    return _.map(members, member =>
      <Result key={member.queryID} member={member} />
    ).concat(this.addPlaceholders(members.length, 8));
  }

  render() {
    return (
      <div className="members">
        {this.buildCards(this.props.members)}
      </div>
    );
  }
}

export default Results;
