const PORT = process.env.port || 3001;
const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(express.static(`${__dirname}/../client`));
app.use(bodyparser.json());

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
