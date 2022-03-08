const fs = require('fs')
const express = require('express')
const app = express()
const { notes } = require('./db/db.json')
const path = require('path')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})

app.get('/api/notes', (req, res) => {
    let result = notes
    res.json(result)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const notes = createNewNotes(req.body, animals);
    res.json(notes)
})

app.listen(80)

