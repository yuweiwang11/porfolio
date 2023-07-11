const express = require('express')
const cors = require('cors')
const app = express()

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
)

app.get('/', function (req, res) {
  res.send('Hello World from api')
})

app.listen(3000)
