import React from 'react';
import Drawer from 'material-ui/Drawer';
import About from './about.jsx';
import Quotes from './quotes.jsx';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0,
      menuSize: 400,
    };
    this.chooseQuote = this.chooseQuote.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.windowSize < 425) {
      this.setState({ menuSize: 350 });
    } else {
      this.setState({ menuSize: 400 });
    }
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
        width={this.state.menuSize}
      >
        <div className="menu-pad">
          <h3 className="no-margin-bot">Transparent Government</h3>
          <p className="no-margin-top">Is a good thing</p>
        </div>
        <Quotes
          quoteIndex={this.state.quoteIndex}
          chooseQuote={this.chooseQuote}
        />
        <About />
      </Drawer>
    );
  }
}

export default Menu;
