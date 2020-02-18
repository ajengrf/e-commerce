const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', route)

app.listen(port, () => console.log(`Listening on port ${port}!`))

module.exports = app