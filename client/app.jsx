import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Components/navbar/navbar.jsx';
import Http from './Components/http/http.jsx';
import Menu from './Components/menu/menu.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      windowSize: window.innerWidth,
    };
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }
  handleResize(e) {
    this.setState({ windowSize: window.innerWidth });
  }
  handleMenuToggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Navbar
            handleMenuToggle={this.handleMenuToggle}
          />
          <Menu
            isOpen={this.state.isMenuOpen}
            handleMenuToggle={this.handleMenuToggle}
            windowSize={this.state.windowSize}
          />
          <Http
            windowSize={this.state.windowSize}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
