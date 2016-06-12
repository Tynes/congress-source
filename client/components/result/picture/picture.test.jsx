/* eslint-env mocha */
/* eslint prefer-arrow-callback: "off", func-names: "off" */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Picture from './picture.jsx';

describe('Picture Component', function () {
  let wrapper;
  before(function () {
    wrapper = shallow(<Picture />);
  });
  it('Renders without a problem', function () {
    expect(wrapper.is('div')).to.equal(true);
  });
});
