import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import quoteStore from './quoteStore.js';
const quoteCount = quoteStore.length;

const styles = {
  width: '100%',
};

const Quotes = ({ quoteIndex, chooseQuote }) => (
  <div className="menu-pad quote-box">
    <FlatButton
      label="More Quotes!"
      onClick={() => chooseQuote(quoteCount)}
      style={styles}
    />
    <p>
      {quoteStore[quoteIndex]}
    </p>
  </div>
);

export default Quotes;
