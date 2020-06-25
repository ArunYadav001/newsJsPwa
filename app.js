const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(__dirname + '/static'));

app.get('/', (req ,res) => res.sendFile(path.join(__dirname + '/index.html')));


app.listen(process.env.PORT || 5000)
