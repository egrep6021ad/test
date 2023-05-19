// Imports
const express = require('express')
const cors = require('cors')

// Init. application
const app = express()
app.use(cors())
app.use(express.json())

// Specify port to listen on
const backendPort = 3059

// Main endpoint
app.get('/', function (req, res) {
  res.end('well hello there')
})

// Post endpoint
app.post('/post', function (req, res) {
  console.log(req.body)
  return res.status(200).json()
})

// Listen
app.listen(
  backendPort,
  console.log(`Server running @ http://localhost:${backendPort}`)
)
