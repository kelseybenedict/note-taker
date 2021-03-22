const fs = require("fs");
// using uuid to create a universal id (per instructions) - npmjs.org -> uuid
const { v4: uuidv4} = require('uuid');
uuidv4()
// importing db.json file to reference it later
const db = require("../db/db.json")

// routing 
module.exports = (app) => {
    // using a get request to route to the "notes" tab
    app.get('note-taker/Develop/public/api/notes', (req, res) => {
        // sending request to server
        res.send(db);
    });
  
    app.post('note-taker/Develop/public/api/notes', (req, res) => {
        // creating a variable for body input from user
        let note = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text

        };
        // adding note to db.json
        db.push(note);
        // sending note to server
        res.send(note);
    });
    // adding delete method
    // the route path lets you specify the specific note you want to delete
    app.delete("note-taker/Develop/public/api/notes/:id", (req, res) => {
        let noteID = req.params.id
        // looping through db length 
        for (var i = 0; i < db.length; i++) {
            // if the ID in the json file matches the note ID in the path
            if(db[i].id === noteID) {
                // then create a variable of that index
                let objIndex = db.indexOf(db);
                // delete it from db
                db.splice(objIndex,1);
            }
            // sending change to server
        res.send(db);
    }
});
};

