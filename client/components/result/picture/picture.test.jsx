/* eslint-env mocha */
/* eslint prefer-arrow-callback: "off", func-names: "off" */
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Picture from './picture.jsx';

const expect = chai.expect;
chai.use(chaiEnzyme());

describe('Picture Component', function () {
  let wrapper;
  before(function () {
    wrapper = shallow(<Picture />);
  });
  it('Renders without a problem', function () {
    expect(wrapper).to.be.present();
  });
});
