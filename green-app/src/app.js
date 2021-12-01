const path = require('path')
const express = require('express')

const publicDirectoryPath = path.join(__dirname, '../public')
const app = express()

app.use(express.static(publicDirectoryPath))

app.get('/about', (req, res) => {
  res.send('About')
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})