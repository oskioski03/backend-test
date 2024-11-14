const express = require('express')
const cors  = require('cors')
const data = require('./data')

const app = express()

const PORT = 4200;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }))


app.get('/data', (req, res) => {
    res.send(data)
})

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`))
