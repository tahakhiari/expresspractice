const express = require('express');
const app = express();
const port = 6600;
const indexRoute = require('./components/index.html')

// app.use(express.static(__dirname + '/components/index.html'))
// app.use('/', indexRoute)
//  res.json('the server is running');

app.listen (port, () => {
    console.log(`the server is running on ${port}`)
});