const express = require('express')
const app = express()
const { notes } = require('./db/db.json')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('/api/notes', (req, res) => {
    let result = notes
    res.json(result)
})

app.get('*', (req, res) => {
    // Return index.html
})

app.listen(80)

