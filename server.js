const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const bodyparser = require('body-parser');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded( {extended: true}));
app.use(bodyparser.json());


app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});