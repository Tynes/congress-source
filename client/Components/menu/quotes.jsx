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
      label="Another Quote!"
      onClick={() => chooseQuote(quoteCount)}
      style={styles}
      backgroundColor="#ECECEC"
    />
    <p>
      {quoteStore[quoteIndex]}
    </p>
  </div>
);

export default Quotes;
