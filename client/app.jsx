import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Components/navbar/navbar.jsx';
import Http from './Components/http/http.jsx';
import Menu from './Components/menu/menu.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin({ shouldRejectClick: (lastTouchEventTimestamp, clickEventTimestamp) => true });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
    };
  }
  handleMenuToggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Navbar
            handleMenuToggle={this.handleMenuToggle.bind(this)}
          />
          <Menu
            isOpen={this.state.isMenuOpen}
            handleMenuToggle={this.handleMenuToggle.bind(this)}
          />
          <Http />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
