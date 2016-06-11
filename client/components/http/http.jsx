import React from 'react';
import Results from '../results/results.jsx';
import axios from 'axios';

class Http extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }
  componentDidMount() {
    this.getPeople();
  }
  getPeople() {
    axios.get('http://localhost:3000/objects?_start=0&_end=10')
      .then(response => {
        console.log(response);
        this.setState({ people: response.data });
      });
  }
  render() {
    return (
      <Results people={this.state.people} />
    );
  }
}

export default Http;

/*
Wraps around results
Does the http requests then passes
down the data to results
*/
