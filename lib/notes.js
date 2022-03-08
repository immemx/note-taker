const fs = require("fs");
const path = require("path")

function createNewNotes(body, notesArray) {

    const results = body;
    notesArray.push(results);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
    return result
}

module.exports = createNewNotes