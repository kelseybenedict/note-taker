// requiring express to be able to access it
const express = require('express');

// creating an express server
const app = express();

// setting initial port
const PORT = process.env.PORT || 3000;

// set up for data parsing -- express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routing to apiRoutes & htmlRoutes
require('../Develop/routes/apiRoutes')(app);
require('../Develop/routes/htmlRoutes')(app);

// creating the listener and notification to check if it's working
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
