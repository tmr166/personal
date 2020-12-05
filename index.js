const express = require('express');
const app = express();
const path = require("path");

const port = 5000;
app.listen(port)
console.log("Listening on port: " + port)

app.use(express.static(__dirname))