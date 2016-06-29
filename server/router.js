const searchMethods = require('./controllers/searchMethods.js');

module.exports = app => {
  // Single function that handles all search
  app.get('/search', (req, res) => {
    const searchBy = req.query.searchBy;
    const party = req.query.party;
    const query = req.query.query;
    const begin = req.query.begin || 0;
    const end = req.query.end || 8;
    let dbCall;
    if (!query && !party) {
      dbCall = searchMethods.getAllMembers;
      // searchMethods.getAllMembers()
      //   .then(response => searchMethods.extract(response, begin, end))
      //   .then(response => res.send(response))
      //   .catch(err => console.log('error in router when no query', err));
    } else {
      // control flow first for name vs state
      if (searchBy === 'name') {
        if (party) {
          dbCall = searchMethods.getAllByNameAndParty;
          // searchMethods.getAllByNameAndParty(query, party)
          //   .then(response => searchMethods.extract(response, begin, end))
          //   .then(response => res.send(response))
          //   .catch(err => console.log('error in router, getAllByName', err));
        } else {
          dbCall = searchMethods.getAllByName;
          // searchMethods.getAllByName(query)
          //   .then(response => searchMethods.extract(response, begin, end))
          //   .then(response => res.send(response))
          //   .catch(err => console.log('error in search getAllByName', err));
        }
      } else if (searchBy === 'state') {
        if (party) {
          dbCall = searchMethods.getAllByStateAndParty;
          // searchMethods.getAllByStateAndParty(query, party)
          //   .then(response => searchMethods.extract(response, begin, end))
          //   .then(response => res.send(response))
          //   .catch(err => console.log('error in search getAllByStateAndParty', err));
        } else {
          dbCall = searchMethods.getAllByState;
          // searchMethods.getAllByState(query)
          //   .then(response => searchMethods.extract(response, begin, end))
          //   .then(response => res.send(response))
          //   .catch(err => console.log('error in search get all by state', err));
        }
      } else {
        res.send(404);
      }
    }
    dbCall(query, party)
      .then(response => searchMethods.extract(response, begin, end))
      .then(response => res.send(response))
      .catch(err => console.log(`error in ${dbCall}`, err));
  });
};
