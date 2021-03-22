// DEPENDENCIES
// followed format from Activity 15 - Hot Restaurant
// including path package to get correct file path for html
const path = require('path');

// ROUTING
module.exports = (app) => {

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
};
