// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, 'build')));

// For any other requests, send back React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
