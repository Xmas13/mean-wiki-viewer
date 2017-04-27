// Imported Express and Path
const express = require('express');
const path = require('path');

// Started Express
const app = express();

// Set the port
const port = process.env.PORT || 8080

// Set static directory for Express to serve out of (the prebuilt Angular App)
app.use(express.static(path.join(__dirname, 'angular-src/dist')));

// Set routes to serve the prebuilt index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular-src/dist/index.html'));
});

// Set listen port
app.listen(port, () => {
  console.log('Server started on port ' + port);
})
