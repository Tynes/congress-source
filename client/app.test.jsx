/* eslint-env mocha */
/* eslint prefer-arrow-callback: "off", func-names: "off" */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './app.jsx';

describe('App Component', function () {
  it('Renders without a problem', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.is('div')).to.equal(true);
  });
});
