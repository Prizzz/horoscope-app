const rp = require('request-promise');
const url = 'https://ignio.com/r/export/utf/xml/daily/com.xml';

const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

rp(url).then(function (html) {
  app.get('/', (req, res) => res.send(html));
});
