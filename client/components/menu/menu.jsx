import React from 'react';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
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
        <div>
          <FlatButton
            label="GitHub"
            linkButton={true}
            href="https://github.com/tynes"
            icon={<FontIcon
              className="fa fa-github"
            />}
          />
          <FlatButton
            label="Twitter"
            linkButton={true}
            href="https://twitter.com/tyneslol"
            icon={<FontIcon
              className="fa fa-twitter"
            />}
          />
          <FlatButton
            label="LinkedIn"
            linkButton={true}
            href="https://www.linkedin.com/in/marktyneway"
            icon={<FontIcon
              className="fa fa-linkedin-square"
            />}
          />
        </div>
      </Drawer>
    );
  }
}

export default Menu;
