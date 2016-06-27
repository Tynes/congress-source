/* eslint func-names: "off", prefer-arrow-callback: "off" */
/* global describe it expect */
const assert = require('chai').assert;
const axios = require('axios');

before('set up db', function () {
  const db = require('../db.js');
});

describe('GET /search', function () {
  describe('No query', () => {
    it('should return 8', function () {
      axios.get('/search?type=name')
        .then(response => {
          expect(response.length).to.equal(8);
        })
        .catch(err => console.error('error in 1', err));
    });
    it('should return the next 8', function () {
      axios.get('/search?type=name&begin=8&end=16')
        .then(response => {
          expect(response.length).to.equal(8);
        })
        .catch(err => console.error('error in 2', err));
    });
  });
  describe('Type of name', function () {
    it('should query by name', function () {
      axios.get('/search?type=name&query=bernard')
        .then(response => {
          const bernie = response[0].firstname.toLowerCase();
          const sanders = response[0].lastname.toLowerCase();
          expect(bernie).to.equal('bernard');
          expect(sanders).to.equal('sanders');
        })
        .catch(err => console.error('error in 3', err));
    });
  });
});
