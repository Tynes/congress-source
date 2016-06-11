import React from 'react';
import Paper from 'material-ui/Paper';
import _ from 'underscore';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {_.map(this.props.members, member =>
          <Paper>
            <h1>{member.person.firstname}</h1>
          </Paper>
        )}
      </div>
    );
  }
}

export default Results;
