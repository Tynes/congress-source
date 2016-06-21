import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Components/navbar/navbar.jsx';
// import Search from './Components/search/search.jsx';
import Http from './Components/http/http.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Navbar />
          <Http />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
