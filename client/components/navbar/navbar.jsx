import React from 'react';
import AppBar from 'material-ui/AppBar';

class Navbar extends React.Component {
  render() {
    return (
      <AppBar
        onLeftIconButtonTouchTap={() => this.props.handleMenuToggle()}
      />
    );
  }
}

export default Navbar;
