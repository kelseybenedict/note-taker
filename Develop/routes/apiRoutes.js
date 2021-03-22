// requiring fs to handle CRUD operations
const fs = require("fs");
// using uuid to create a universal id (per instructions)
const { v4: uuidv4 } = require('uuid');

// routing 
module.exports = (app) => {
    // using a get request to route to the "notes" tab
    app.get('/api/notes', (req, res) => {
        // creating a data variable to store our data string as a json file
        let data = JSON.parse(fs.readFileSync("./data/db.json", "utf8"));
        // setting our response into JSON
        res.json(data);
    });
  
    app.post('/api/notes', (req, res) => {
        // creating a variable for body input from user
        let newNote = req.body;
        // generating ID for that new note
        newNote.id = uuidv4();
        // same as above in our get method
        let data = JSON.parse(fs.readFileSync("./data/db.json", "utf8"));
        // pushing our user input into our data
        data.push(newNote);
        // sending in our JSON as a string, so it can be processable by the web server
        fs.writeFileSync('./data/db.json', JSON.stringify(dataStorage));
        res.json(data);
    })
}
