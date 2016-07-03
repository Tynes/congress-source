import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import quoteStore from './quoteStore.js';
const quoteCount = quoteStore.length;

const Quotes = ({ quoteIndex, chooseQuote }) => (
  <div>
    <FlatButton
      label="Learn!"
      onClick={() => chooseQuote(quoteCount)}
    />
    <p>
      {quoteStore[quoteIndex]}
    </p>
  </div>
);

export default Quotes;
