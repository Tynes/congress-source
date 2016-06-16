/* eslint-env mocha */
/* eslint prefer-arrow-callback: "off", func-names: "off" */
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Affiliation from './affiliation.jsx';

const expect = chai.expect;
chai.use(chaiEnzyme());

describe('Affiliation Component', function () {
  let wrapper;
  before(function () {
    wrapper = shallow(<Affiliation />);
  });
  it('Renders without a problem', function () {
    expect(wrapper).to.be.present();
  });
});
