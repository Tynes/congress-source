import React from 'react';
import _ from 'underscore';
import Result from '../result/result.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="members">
        {_.map(this.props.members, member =>
          <Result key={member.queryID} member={member} />
        )}
      </div>
    );
  }
}

export default Results;
