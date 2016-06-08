/* eslint-env mocha */
/* eslint prefer-arrow-callback: "off", func-names: "off" */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './app.jsx';
import Navbar from './Components/navbar/navbar.jsx';
import Http from './Components/http/http.jsx';

describe('App Component', function () {
  let wrapper;
  before(function () {
    wrapper = shallow(<App />);
  });
  it('Renders without a problem', function () {
    expect(wrapper.is('div')).to.equal(true);
  });
  it('Contains the Navbar and Http Components', function () {
    expect(wrapper.contains([
      <Navbar />,
      <Http />,
    ]));
  });
});
