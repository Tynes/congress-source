import React from 'react';
import Navbar from './Components/navbar/navbar.jsx';
import Http from './Components/http/http.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Http />
      </div>
    )
  }
}

export default App;
