"use strict";
var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
app.get('/', function (req, res) { return res.send("HELLO WORLD"); });
app.listen(PORT, function () { return console.log("Listening in port " + PORT); });
