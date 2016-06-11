import React from 'react';
import Results from '../results/results.jsx';

class Http extends React.Component {
  render() {
    return (
      <Results />
    );
  }
}

export default Http;

/*
Wraps around results
Does the http requests then passes
down the data to results
*/
