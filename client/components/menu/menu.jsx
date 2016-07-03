import React from 'react';
import Drawer from 'material-ui/Drawer';

import { List, ListItem } from 'material-ui/List';
import Quotes from './quotes.jsx';

// TODO: add link to github, twitter and linkedin
// TODO: add philosophical tidbits about me

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      quoteIndex: 0,
    };
  }
  chooseQuote(length) {
    this.setState({
      quoteIndex: Math.floor(Math.random() * length),
    });
  }

  render() {
    return (
      <Drawer
        open={this.props.isOpen}
        docked={false}
        onRequestChange={e => this.props.handleMenuToggle()}
        width={400}
      >
        <Quotes
          quoteIndex={this.state.quoteIndex}
          chooseQuote={this.chooseQuote.bind(this)}
        />
        <List>
          <ListItem primaryText="GitHub" />
          <ListItem primaryText="Twitter" />
          <ListItem primaryText="LinkedIn" />
        </List>
      </Drawer>
    );
  }
}

export default Menu;
