/* eslint-env mocha */
/* eslint prefer-arrow-callback: "off", func-names: "off" */
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Result from './result.jsx';

const expect = chai.expect;
chai.use(chaiEnzyme());

describe('Result Component', function () {
  const member = {
    enddate: '2050-01-01',
    firstname: 'Lorin',
    lastname: 'Ashton',
    id: 808,
    link: 'nectar.net',
    party: 'Not a Republican',
    role_type_label: 'Bass Lord',
    startdate: '1990-01-01',
    state: 'CA',
    twitterid: 'bassnectar',
    website: 'bassnectar.com',
  };
  let wrapper;
  before(function () {
    wrapper = shallow(<Result member={member} />);
  });
  it('Renders without a problem', function () {
    expect(wrapper).to.be.present();
  });
});
