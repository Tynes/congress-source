import React from 'react';
import Drawer from 'material-ui/Drawer';
import About from './about.jsx';
import Quotes from './quotes.jsx';

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
        <div className="menu-pad">
          <h3>Transparent Government</h3>
          <p>Is a good thing</p>
        </div>
        <Quotes
          quoteIndex={this.state.quoteIndex}
          chooseQuote={this.chooseQuote.bind(this)}
        />
        <About />
      </Drawer>
    );
  }
}

export default Menu;
