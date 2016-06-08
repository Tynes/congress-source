/* eslint-env mocha */
/* eslint prefer-arrow-callback: "off", func-names: "off" */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from './app.jsx';

describe('The app', function () {
  it('contains spec with an expectation', function () {
    expect(shallow(<App />).is('.app')).to.equal(true);
  });

  it('contains spec with an expectation', function () {
    expect(mount(<App />).find('.app').length).to.equal(1);
  });
});
