const express = require('express');
const app = express();
const path = require('path');

const PORT = 5000;

app.use(express.static(path.join(__dirname, '..', '/client')));

// Start the server
var server = app.listen(PORT, () => {
    console.log("Example app listening at", server.address().port);
});

// Endpoint for main page
app.get("/", (req, res) => {
    // Send back the index.html document
    res.sendFile(path.join(__dirname + "/../client/index.html"));
});