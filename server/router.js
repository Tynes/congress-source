const searchMethods = require('./controllers/searchMethods.js');

// single endpoint that uses queries to make the
// proper database call

module.exports = app => {
  app.get('/search', (req, res) => {
    const { searchBy, party, query, begin = 0, end = 8 } = req.query;
    let dbCall;
    if (!query && !party) {
      dbCall = searchMethods.getAllMembers;
    } else if (searchBy === 'name' && party) {
      dbCall = searchMethods.getAllByNameAndParty;
    } else if (searchBy === 'name') {
      dbCall = searchMethods.getAllByName;
    } else if (searchBy === 'state' && party) {
      dbCall = searchMethods.getAllByStateAndParty;
    } else if (searchBy === 'state') {
      dbCall = searchMethods.getAllByState;
    } else {
      res.send(404);
    }
    dbCall(query, party)
      .then(response => {
        const members = searchMethods.extract(response, begin, end);
        return { members: members, length: response.length };
      })
      .then(response => res.send(response))
      .catch(err => console.log(`error in ${dbCall}`, err));
  });
  app.get('/test', (req, res) => {
    searchMethods.buildDB()
      .then(response => res.send(response))
      .catch(err => console.log('error', err));
  });
};
