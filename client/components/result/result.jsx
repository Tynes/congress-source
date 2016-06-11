import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <h1>{this.props.member.person.firstname}</h1>
    );
  }
}

export default Result;
