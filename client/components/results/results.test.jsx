/* eslint-env mocha */
/* eslint prefer-arrow-callback: "off", func-names: "off" */
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Results from './results.jsx';

const expect = chai.expect;
chai.use(chaiEnzyme());

describe('Results Component', function () {
  let wrapper;
  before(function () {
    wrapper = shallow(<Results />);
  });
  it('Renders without a problem', function () {
    expect(wrapper).to.be.present();
  });
});
